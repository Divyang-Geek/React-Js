import { Col, Container, Row } from "react-bootstrap";
import Card from "../components/Card";

const Home = () => {
    return (
        <>
            <section className="restaurant_sec min-vh-100 py-5">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <Card />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Home;
