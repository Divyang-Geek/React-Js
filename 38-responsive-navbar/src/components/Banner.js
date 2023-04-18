import { Col, Container, Row } from "react-bootstrap";

const Banner = ({ pageName }) => {
    return (
        <>
            <section className="main_banner py-5">
                <Container>
                    <Row>
                        <Col lg={6} className="mx-auto">
                            <div className="banner_content text-center ">
                                <h1>This is a {pageName} Page</h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Banner;
