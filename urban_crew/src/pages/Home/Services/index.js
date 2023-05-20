import { Col, Container, Row } from "react-bootstrap";
import SecTitle from "../../../components/Common/SecTitle";
import Lines from "../../../components/Common/Lines";
import { Link } from "react-router-dom";
import { ServicesData } from "./ServicesData";

const Services = () => {
    return (
        <>
            <section className="main-service section">
                <div className="sec-wp">
                    <Container>
                        <Row>
                            <Col xs={12} lg={8} className="mx-lg-auto">
                                <SecTitle
                                    subTitle={{
                                        first: "Our",
                                        second: "Services",
                                    }}
                                    className="mb-80 text-center"
                                    h2Class="yellow-span"
                                >
                                    Creative <span>Solutions</span> For Grow Your <span>Business</span>
                                </SecTitle>
                            </Col>
                        </Row>
                        <div className="service-row">
                            <Row className="gx-xl-5 gx-lg-4 gx-md-5">
                                {ServicesData.map((data) => {
                                    const { id, title, icon, description, link } = data;
                                    return (
                                        <Col lg={4} md={6} key={id}>
                                            <Lines className="service-box">
                                                <div className="service-box-inr">
                                                    <div className="service-box-overlay">
                                                        <Link to={link} className="service-plus-inr">
                                                            <span className="service-plus-icon"></span>
                                                        </Link>
                                                    </div>
                                                    <div className="service-box-inr--icon">
                                                        <img src={icon} alt={title} />
                                                    </div>
                                                    <div className="service-box-inr--content">
                                                        <h4 className="h4-title">{title}</h4>
                                                        <p>{description}</p>
                                                    </div>
                                                </div>
                                            </Lines>
                                        </Col>
                                    );
                                })}
                            </Row>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    );
};

export default Services;
