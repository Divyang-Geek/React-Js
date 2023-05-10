import { Col, Container, Pagination, Row } from "react-bootstrap";
import { EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const BannerSlider = () => {
    return (
        <>
            <div className="main-banner">
                <div className="sec-wp">
                    <Container fluid className="g-0">
                        <div className="banner-slider-wrap">
                            <div className="banner-slider">
                                <div className="banner-slide">
                                    <Row className="g-0">
                                        <Col lg={9}>
                                            <div className="banner-image-wp">
                                                <div className="banner-image back-image"></div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            {/* <Swiper
                            // modules={[EffectFade, Navigation, Pagination]}
                            spaceBetween={0} slidesPerView={1} loop={false} speed={800} navigation effect="fade" pagination={{ clickable: true }}>
                                <SwiperSlide>Slide 1</SwiperSlide>
                                <SwiperSlide>Slide 2</SwiperSlide>
                                <SwiperSlide>Slide 3</SwiperSlide>
                                <SwiperSlide>Slide 4</SwiperSlide>
                            </Swiper> */}
                        </div>
                    </Container>
                </div>
            </div>
        </>
    );
};

export default BannerSlider;
