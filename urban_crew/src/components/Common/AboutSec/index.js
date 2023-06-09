import { Col, Container, Row } from "react-bootstrap";
import SecTitle from "../SecTitle";
import Button from "../Button";
import Lines from "../Lines";
import aboutImage1 from "../../../assets/images/about-image-1.jpg";
import aboutImage2 from "../../../assets/images/about-image-2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";

const AboutSec = ({ odd }) => {
    return (
        <>
            <section className={odd ? "section" : "main-about section secondary-bg text-white"}>
                <div className="sec-wp">
                    <Container>
                        <Row className="align-items-center">
                            <Col xl={{ span: 6, order: odd ? 2 : 1, offset: odd ? 1 : null }} lg={{ span: 6 }} xs={{ order: 2 }}>
                                <div className={`about-content${odd ? "" : " white-text"}`}>
                                    <SecTitle
                                        subTitle={{
                                            first: "About",
                                            second: "Us",
                                        }}
                                        h2Class="yellow-span"
                                    >
                                        we are <span>Dedicated</span> To Support You
                                    </SecTitle>
                                    <div className="about-content-text">
                                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                                        <p>I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. I feel the presence of the Almighty, who formed us in his own image, and the breath.</p>
                                    </div>
                                    {!odd && (
                                        <div className="sec-btn-wp mt-40">
                                            <Button text="Read More" className="yellow-btn" url="/about" />
                                        </div>
                                    )}
                                </div>
                            </Col>
                            <Col xl={{ span: 5, order: odd ? 1 : 2, offset: odd ? null : 1 }} lg={{ span: 6 }} xs={{ order: 1 }}>
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
            </section>
        </>
    );
};

export default AboutSec;
