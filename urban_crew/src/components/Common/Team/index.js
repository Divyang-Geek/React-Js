import { Col, Container, Row } from "react-bootstrap";
import SecTitle from "../../../components/Common/SecTitle";
import { Link } from "react-router-dom";
import TeamData from "./TeamData";

const Team = () => {
    return (
        <>
            <section className="main-team section marginX-100 secondary-bg">
                <div className="team-star">
                    <span className="team-star-img star-eight-corner"></span>
                </div>
                <div className="sec-wp">
                    <Container>
                        <Row>
                            <Col lg={7} className="mx-auto">
                                <SecTitle
                                    subTitle={{
                                        first: "Our",
                                        second: "Consultants",
                                    }}
                                    className="mb-80 text-center white-text"
                                    h2Class="yellow-span"
                                >
                                    Meet Our <span>Professional</span> Consultants
                                </SecTitle>
                            </Col>
                        </Row>
                        <div className="team-box-row">
                            <Row className="g-xl-5 g-4">
                                {TeamData.map((data) => {
                                    const { id, name, designation, image, social } = data;
                                    return (
                                        <Col lg={4} sm={6} key={id}>
                                            <div className="team-box">
                                                <div className="team-box-img overlay" data-overlay="1">
                                                    <img src={image} alt={name} />
                                                    <div className="team-box-social">
                                                        <h6>Social</h6>
                                                        <ul>
                                                            {social.map((data, index) => {
                                                                const { id, title, url } = data;
                                                                return (
                                                                    <li key={id}>
                                                                        <Link to={url} style={{ "--uc-tb-social": `${index}` }}>
                                                                            {title}
                                                                        </Link>
                                                                    </li>
                                                                );
                                                            })}
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="team-box-content white-text">
                                                    <h3 className="h3-title">{name}</h3>
                                                    <p>{designation}</p>
                                                </div>
                                            </div>
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

export default Team;
