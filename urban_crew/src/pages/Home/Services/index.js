import { Col, Container, Row } from "react-bootstrap";
import SecTitle from "../../../components/Common/SecTitle";
import Lines from "../../../components/Common/Lines";
import { Link } from "react-router-dom";
import { ServicesData } from "./ServicesData";

const Services = () => {
    return (
        <>
            <div className="main-service section">
                <div className="sec-wp">
                    <Container>
                        <Row>
                            <Col xs={12} lg={8} className="mx-lg-auto">
                                <SecTitle
                                    subTitleText={{
                                        subFirst: "Our",
                                        subSecond: "Services",
                                    }}
                                    h2TitleText={{
                                        h2First: "Creative ",
                                        h2Second: "Solutions",
                                        h2Third: "For Grow Your",
                                        h2Fourth: "Business",
                                    }}
                                    className="mb-80 text-center"
                                />
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
            </div>
        </>
    );
};

export default Services;
