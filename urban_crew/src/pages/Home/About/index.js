import { Col, Container, Row } from "react-bootstrap";
import SecTitle from "../../../components/Common/SecTitle";
import Button from "../../../components/Common/Button";
import Lines from "../../../components/Common/Lines";
import aboutImage1 from "../../../assets/images/about-image-1.jpg";
import aboutImage2 from "../../../assets/images/about-image-2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";

const About = () => {
    return (
        <>
            <div className="main-about section secondary-bg text-white">
                <div className="sec-wp">
                    <Container>
                        <Row className="align-items-center">
                            <Col lg={{ span: 6, order: 1 }} xs={{ order: 2 }}>
                                <div className="about-content white-text">
                                    <SecTitle
                                        subTitleText={{
                                            subFirst: "About",
                                            subSecond: "Us",
                                        }}
                                        h2TitleText={{
                                            h2First: "We Are",
                                            h2Second: "Dedicated",
                                            h2Third: "To Support You",
                                        }}
                                    />
                                    <div className="about-content-text">
                                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                                        <p>I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. I feel the presence of the Almighty, who formed us in his own image, and the breath.</p>
                                    </div>
                                    <div className="sec-btn-wp mt-40">
                                        <Button text="Read More" className="yellow-btn" url={"/about"} />
                                    </div>
                                </div>
                            </Col>
                            <Col xl={{ span: 5, offset: 1 }} lg={{ span: 6, order: 2 }} xs={{ order: 1 }}>
                                {/* <Lines className="common-image-wp">
                                    <div className="common-image overlay" data-overlay="1">
                                        <div className="common-image-inr">
                                            <div className="common-image-inr-inr">
                                                <img src={aboutImage1} alt="aboutImage1" />
                                            </div>
                                        </div>
                                    </div>
                                </Lines> */}
                                <Lines className="common-image-wp">
                                    <Swiper spaceBetween={0} slidesPerView={1} modules={[EffectFade]} loop="true" effect="fade" className="about-image-slider">
                                        <SwiperSlide>
                                            <div className="common-image overlay" data-overlay="1">
                                                <div className="common-image-inr">
                                                    <div className="common-image-inr-inr">
                                                        <img src={aboutImage1} alt="aboutImage1" />
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="common-image overlay" data-overlay="1">
                                                <div className="common-image-inr">
                                                    <div className="common-image-inr-inr">
                                                        <img src={aboutImage2} alt="aboutImage2" />
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </Lines>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
};

export default About;
