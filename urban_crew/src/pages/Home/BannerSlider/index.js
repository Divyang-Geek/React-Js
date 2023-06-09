import { Col, Container, Row } from "react-bootstrap";
import { Autoplay, EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../../../components/Common/Button";
import  BannerSliderData from "./BannerSliderData";

const BannerSlider = () => {

    return (
        <>
            <section className="main-banner marginX-100">
                <div className="sec-wp">
                    <Container fluid className="g-0">
                        <div className="banner-slider-wrap">
                            <Swiper
                                className="banner-slider"
                                modules={[EffectFade, Pagination, Autoplay]}
                                spaceBetween={0}
                                slidesPerView={1}
                                speed={800}
                                effect="fade"
                                loop={true}
                                pagination={{ clickable: true, el: ".swiper-pagination", type: "fraction" }}
                                autoplay={{ delay: 3500, disableOnInteraction: false }}
                                // onSlideChange={() => {
                                //     console.log("Slide Change");
                                // }}
                                // onSwiper={(swiper) => console.log(swiper)}
                            >
                                {BannerSliderData.map((data) => {
                                    const { id, img, content, link } = data;
                                    return (
                                        <SwiperSlide className="banner-slide" key={id}>
                                            <Row className="g-0">
                                                <Col lg={9}>
                                                    <div className="banner-image-wp">
                                                        <div className="banner-image back-image" style={{ backgroundImage: `url(${img})` }}></div>
                                                    </div>
                                                </Col>
                                                <Col lg={3}>
                                                    <div className="banner-content-wp">
                                                        <div className="banner-content white-text">
                                                            <div className="swiper-slide-x--cover swiper-slide-x--cover1">
                                                                <h1 className="h1-title">{content}</h1>
                                                            </div>
                                                            <div className="swiper-slide-x--cover swiper-slide-x--cover2">
                                                                <Button text="Read More" className="yellow-btn" url={link} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </SwiperSlide>
                                    );
                                })}
                                <div className="swiper-pagination">
                                    <span className="swiper-pagination-current"></span> /<span className="swiper-pagination-total"></span>
                                </div>
                                <div className="swiper-progress-bar active">
                                    <span className="slide_progress-bar">
                                        <span className="slide_progress-bar-inner"></span>
                                    </span>
                                </div>
                            </Swiper>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    );
};

export default BannerSlider;
