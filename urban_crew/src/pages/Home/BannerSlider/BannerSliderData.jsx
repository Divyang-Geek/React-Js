import bannerImage1 from "../../../assets/images/banner-image.jpg";
import bannerImage2 from "../../../assets/images/banner-image2.jpg";

const SVG = ({ isHighlight, children }) => {
    return (
        <>
            <span className="highlight-svg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 200" preserveAspectRatio="none">
                    <path d="M455,170 C392,148 24,163 9,165 C7,138 3,50 5,29 C28,25 461,-6 495,20 C494,44 493,137 492,150" style={{ "--uc-highlight-svg": isHighlight }}></path>
                </svg>
                {children}
            </span>
        </>
    );
};

const BannerSliderData = [
    {
        id: 1,
        img: bannerImage1,
        content: (
            <>
                <SVG isHighlight="0">Strategy</SVG> and Growth <SVG isHighlight="1">Solutions</SVG> For Consulting
            </>
        ),
        link: "/about",
    },
    {
        id: 2,
        img: bannerImage2,
        content: (
            <>
                An <SVG isHighlight="0">Exclusive</SVG> Learning <SVG isHighlight="1">Journey</SVG> For Consulting
            </>
        ),
        link: "/about",
    },
];

export default BannerSliderData;
