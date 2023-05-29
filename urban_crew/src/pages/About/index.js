import InnerBanner from "../../components/Common/InnerBanner";
import AboutSec from "../../components/Common/AboutSec";
import VideoSec from "../../components/Common/VideoSec";
import { Container } from "react-bootstrap";
import ClientLogoSlider from "../../components/Common/ClientLogoSlider";
import Counter from "../../components/Common/Counter";
import Team from "../../components/Common/Team";
import Blog from "../../components/Common/Blog";

const About = () => {
    return (
        <>
            <InnerBanner />
            <AboutSec odd="true" />
            <VideoSec />
            <div className="main-client-logo-slider section">
                <div className="sec-wp marginX-100">
                    <Container fluid>
                        <ClientLogoSlider />
                    </Container>
                </div>
            </div>
            <Counter />
            <Team />
            <Blog />
        </>
    );
};

export default About;
