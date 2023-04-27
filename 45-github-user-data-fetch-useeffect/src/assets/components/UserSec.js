import { Button, Card, Col, Container, Row } from "react-bootstrap";

const UserSec = () => {
    return (
        <>
            <div className="user_sec pt-5">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="sec_title text-center">
                                <h2 className="fw-bold">List Of Github Users</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <Card style={{ width: "18rem" }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default UserSec;
