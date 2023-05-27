import { Link } from "react-router-dom";
import siteLogoDark from "../../assets/images/site-logo-dark.svg";
import siteLogoLight from "../../assets/images/site-logo-white.svg";

const SiteLogo = ({ className, lightLogo }) => {
    return (
        <>
            <div className={`site-logo${className ? ` ${className}` : ""}`}>
                <Link to={"/"} title="Urban Crew - Business Consulting">
                    <img src={lightLogo ? siteLogoLight : siteLogoDark} alt="Site Logo" />
                </Link>
            </div>
        </>
    );
};

export default SiteLogo;
