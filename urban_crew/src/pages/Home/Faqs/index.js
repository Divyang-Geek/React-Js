import { Col, Container, Row } from "react-bootstrap";
import SecTitle from "../../../components/Common/SecTitle";
import Button from "../../../components/Common/Button";
import FaqsData from "./FaqsData";
import { useState } from "react";

const Faqs = () => {
    const [isActive, setIsActive] = useState(null);

    const toggleEvent = (id) => {
        // console.log(id);

        // if (isActive === id) {
        //     setIsActive(null);
        //     return false;
        // }

        setIsActive(id);
    };

    return (
        <>
            <div className="main-faqs section">
                <div className="sec-wp">
                    <Container>
                        <Row>
                            <Col lg={7}>
                                <SecTitle subTitle={{ first: "Your", second: "Questions" }} h2Class="yellow-span" className="mb-80 text-center text-lg-start">
                                    Frequently Asked <span>Questions</span>
                                </SecTitle>
                            </Col>
                            <Col lg={5}>
                                <div className="sec-title-btn">
                                    <Button text="Read More" url="/faqs"></Button>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={10} className="mx-lg-auto">
                                <div className="accordion">
                                    {FaqsData.map((data) => {
                                        const { id, title, description } = data;

                                        return (
                                            <div className="faq-box" key={id}>
                                                <h3
                                                    className={`${isActive === id ? " active" : ""}`}
                                                    onClick={() => {
                                                        toggleEvent(id);
                                                    }}
                                                >
                                                    {title}
                                                    <span className="plus"></span>
                                                </h3>
                                                <div className="faq-content" style={{ display: isActive === id ? "block" : "none" }}>
                                                    <div className="faq-text">
                                                        <p>{description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
};

export default Faqs;
