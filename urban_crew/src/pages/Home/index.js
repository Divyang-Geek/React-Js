import BannerSlider from "./BannerSlider";
import About from "./About";
import Services from "./Services";
import VideoSec from "./VideoSec";
import WorkProcess from "./WorkProcess";
import Counter from "./Counter";
import Team from "./Team";
import Testimonial from "./Testimonial";
import Faqs from "./Faqs";
import Pricing from "./Pricing";
import Blog from "./Blog";

const Home = () => {
    return (
        <>
            <BannerSlider />
            <About />
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
