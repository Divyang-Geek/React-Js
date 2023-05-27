import { Col, Container, Row } from "react-bootstrap";
import SecTitle from "../../../components/Common/SecTitle";
import Button from "../../../components/Common/Button";
import rightArrowWhite from "../../../assets/images/right-arrow-white.svg";
import ClientLogoSlider from "../../../components/Common/ClientLogoSlider";

const Newsletter = () => {
    return (
        <>
            <section className="main-newsletter section marginX-100">
                <div className="sec-wp">
                    <Container fluid>
                        <div className="newsletter-row">
                            <Row className="align-items-end">
                                <Col lg={7}>
                                    <SecTitle className="mb-lg-0" subTitle={{ first: "Our", second: "Newsletter" }} h2Class="yellow-span mb-lg-0">
                                        The <span>Future</span> is exciting. Let's Shape <span>together</span>.
                                    </SecTitle>
                                </Col>
                                <Col lg={5}>
                                    <div className="newsletter-right">
                                        <p>Start Building Your Brand Today With The Best Branding Team, Let Us Give An Oppurtunity To Make Your Branding Better.</p>
                                        <div className="newsletter-form">
                                            <form
                                                onSubmit={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                <div className="form-control-wrap">
                                                    <input type="email" className="form-input" placeholder="Type Your Email..." required />
                                                    <Button type="submit">
                                                        <img src={rightArrowWhite} alt="right-arrow-white" />
                                                    </Button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <ClientLogoSlider />
                        </div>
                    </Container>
                </div>
            </section>
        </>
    );
};

export default Newsletter;
