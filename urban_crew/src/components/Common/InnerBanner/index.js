import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const InnerBanner = () => {
    return (
        <>
            <section className="main-banner marginX-100 inner-banner">
                <div className="sec-wp">
                    <Container fluid className="p-0">
                        <div className="inner-banner-back">
                            <Row className="g-0 flex-grow-1">
                                <Col lg={6} className="mx-lg-auto">
                                    <div className="banner-content white-text">
                                        <h1 className="h1-title">About Us</h1>
                                    </div>
                                    <div className="breadcrumb-wrap">
                                        <ul className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <Link to="/">Home</Link>
                                            </li>
                                            <li className="breadcrumb-item active">About Us</li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    );
};

export default InnerBanner;
