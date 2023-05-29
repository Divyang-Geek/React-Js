import BannerSlider from "./BannerSlider";
import AboutSec from "../../components/Common/AboutSec";
import Services from "./Services";
import VideoSec from "../../components/Common/VideoSec";
import WorkProcess from "./WorkProcess";
import Faqs from "./Faqs";
import Pricing from "./Pricing";
import Counter from "../../components/Common/Counter/";
import Team from "../../components/Common/Team";
import Testimonial from "../../components/Common/Testimonial";
import Blog from "../../components/Common/Blog";

const Home = () => {
    return (
        <>
            <BannerSlider />
            <AboutSec />
            <Services />
            <VideoSec />
            <WorkProcess />
            <Counter />
            <Team />
            <Testimonial />
            <Faqs />
            <Pricing />
            <Blog />
        </>
    );
};

export default Home;
