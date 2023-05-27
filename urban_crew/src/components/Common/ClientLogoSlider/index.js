import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import ClientData from "./ClientData";

const ClientLogoSlider = () => {
    const settings = {
        modules: [Autoplay],
        spaceBetween: 50,
        slidesPerView: 5,
        // onSlideChange: () => console.log("slide change"),
        // onSwiper: (swiper) => console.log(swiper),
        loop: true,
        autoplay: {
            delay: 100,
            disableOnInteraction: false,
        },
    };

    return (
        <>
            <Swiper {...settings} className="client-logo-slider ">
                {ClientData.map((data) => {
                    const { id, img } = data;
                    return (
                        <SwiperSlide className="client-logo" key={id}>
                            <img src={img} alt="client-logo" />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
};

export default ClientLogoSlider;
