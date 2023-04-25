import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";

// Get Items Data From The Local Storage
const getLocalItems = () => {
    const savedList = localStorage.getItem("User Data List");
    // console.log(savedList);
    const parsedList = JSON.parse(savedList);

    if (savedList) {
        return parsedList;
    } else {
        return [];
    }
};

const LoginForm = () => {
    // Create Unique Id
    const uniqId = new Date().getTime().toString();

    const [inputData, setInputData] = useState({
        id: uniqId,
        name: "",
        email: "",
        password: "",
    });

    const [userData, setUserData] = useState(getLocalItems());

    const inputEvent = (e) => {
        const { name, value } = e.target;

        setInputData((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });
    };

    const submitForm = (e) => {
        e.preventDefault();

        if (!inputData) {
            alert("Please Fill The Data");
        } else {
            setUserData([...userData, inputData]);
            // console.log(userData);

            setInputData({
                id: uniqId,
                name: "",
                email: "",
                password: "",
            });
        }
    };

    // Set Data In Local Storage
    useEffect(() => {
        localStorage.setItem("User Data List", JSON.stringify(userData));
    }, [userData]);

    return (
        <>
            <div className="loginForm py-5">
                <Container>
                    <Row>
                        <Col lg={6} className="mx-auto">
                            <Form onSubmit={submitForm}>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control size="lg" type="name" name="name" placeholder="Enter name" value={inputData.name} onChange={inputEvent} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control size="lg" type="email" name="email" placeholder="Enter email" value={inputData.email} onChange={inputEvent} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control size="lg" type="password" name="password" value={inputData.password} placeholder="Password" onChange={inputEvent} />
                                </Form.Group>
                                <Button size="lg" variant="primary" type="submit">
                                    Login
                                </Button>
                            </Form>
                            <Button
                                variant="danger"
                                onClick={() => {
                                    setUserData([]);
                                }}
                            >
                                Clear All
                            </Button>
                            <Table striped bordered hover variant="dark" className="mt-5">
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>Name</th>
                                        <th>Email address</th>
                                        <th>Password</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userData.map((uData) => {
                                        const { id, name, email, password } = uData;
                                        return (
                                            <tr key={id}>
                                                <td>{id}</td>
                                                <td>{name}</td>
                                                <td>{email}</td>
                                                <td>{password}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default LoginForm;
