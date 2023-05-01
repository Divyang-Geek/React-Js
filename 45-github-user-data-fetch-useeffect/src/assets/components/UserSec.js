import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import UserCard from "./UserCard";

const UserSec = () => {
    const [users, setUsers] = useState([]);

    const fetchGithubUserData = async () => {
        try {
            const ApiUrl = `https://api.github.com/users`;

            // Fetch Api
            const resp = await fetch(ApiUrl);
            const data = await resp.json();
            setUsers(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchGithubUserData();
    }, []);

    return (
        <>
            <div className="user_sec pt-5">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="sec_title text-center mb-5">
                                <h1 className="fw-bold">List Of Github Users</h1>
                            </div>
                        </Col>
                    </Row>
                    <Row className="g-5">
                        {users.map((elem) => {
                            const { id } = elem;
                            return <UserCard key={id} elem={elem} />;
                        })}
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default UserSec;
