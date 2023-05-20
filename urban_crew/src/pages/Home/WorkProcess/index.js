import { Col, Container, Row } from "react-bootstrap";
import Lines from "../../../components/Common/Lines";
import workProcessImage1 from "../../../assets/images/work-process-image.jpg";
import SecTitle from "../../../components/Common/SecTitle";
import { WorkProcessStepsData } from "./WorkProcessStepsData";

const WorkProcess = () => {
    return (
        <>
            <section className="main-work-process section">
                <div className="sec-wp">
                    <Container>
                        <Row>
                            <Col lg={6} xl={5}>
                                <Lines className="common-image-wp">
                                    <div className="common-image overlay" data-overlay="1">
                                        <div className="common-image-inr">
                                            <div className="common-image-inr-inr">
                                                <img src={workProcessImage1} alt="workProcessImage1" />
                                            </div>
                                        </div>
                                    </div>
                                </Lines>
                            </Col>
                            <Col lg={6} xl={{ span: 6, offset: 1 }}>
                                <div className="work-process-content">
                                    <SecTitle
                                        subTitle={{
                                            first: "Working",
                                            second: "Process",
                                        }}
                                        className="mb-40"
                                        h2Class="yellow-span"
                                    >
                                        Our Some <span>Easy</span> Way Of <span>Working</span>
                                    </SecTitle>
                                    <div className="work-process-steps">
                                        {WorkProcessStepsData.map((data) => {
                                            const { id, title, description } = data;
                                            return (
                                                <div className="work-process-step" key={id}>
                                                    <h3 className="h3-title">{title}</h3>
                                                    <p>{description}</p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    );
};

export default WorkProcess;
