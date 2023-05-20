import { Col, Container, Row } from "react-bootstrap";
import SecTitle from "../../../components/Common/SecTitle";
import Lines from "../../../components/Common/Lines";
import TestimonialData from "./TestimonialData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonial = () => {
    return (
        <>
            <section className="main-testimonials section">
                <div className="sec-wp">
                    <Container>
                        <Row>
                            <Col lg={7} md={7}>
                                <SecTitle
                                    subTitle={{
                                        first: "Our",
                                        second: "Testimonials",
                                    }}
                                    className="mb-80"
                                    h2Class="yellow-span"
                                >
                                    What <span>they've</span> said about us
                                </SecTitle>
                            </Col>
                        </Row>
                    </Container>
                    <div className="testimonials-row marginX-100">
                        <Container fluid className="p-0">
                            <Swiper
                                className="testimonial-slider overflow-visible"
                                modules={[Pagination, Autoplay, Navigation]}
                                spaceBetween={48}
                                slidesPerView={2}
                                loop={true}
                                pagination={{ clickable: true, el: ".swiper-pagination" }}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                speed={2000}
                                navigation={{
                                    nextEl: ".swiper-button-next",
                                    prevEl: ".swiper-button-prev",
                                }}
                            >
                                {TestimonialData.map((data) => {
                                    const { id, name, designation, description, thumbnail } = data;
                                    return (
                                        <SwiperSlide key={id}>
                                            <Lines className="testimonial-box">
                                                <div className="testimonial-box-quote"></div>
                                                <div className="testimonial-box-text">
                                                    <p>{description}</p>
                                                </div>
                                                <div className="testimonial-box-footer">
                                                    <div className="testimonial-box-img back-image" style={{ backgroundImage: `url(${thumbnail})` }}></div>
                                                    <div className="testimonial-box-footer-content">
                                                        <h5>{name}</h5>
                                                        <h6>{designation}</h6>
                                                    </div>
                                                </div>
                                            </Lines>
                                        </SwiperSlide>
                                    );
                                })}

                                <div className="swiper-button swiper-button-prev">
                                    <span className="swiper-button--icon">
                                        <FaChevronLeft />
                                    </span>
                                    <span className="swiper-button--text">Prev</span>
                                </div>
                                <div className=" swiper-button swiper-button-next">
                                    <span className="swiper-button--icon">
                                        <FaChevronRight />
                                    </span>
                                    <span className="swiper-button--text">Next</span>
                                </div>
                                <div className="swiper-pagination"></div>
                            </Swiper>
                        </Container>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Testimonial;
