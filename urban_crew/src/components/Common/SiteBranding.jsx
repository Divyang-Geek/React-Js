import { Link } from "react-router-dom";
import siteLogoIcon from "../../assets/images/site-logo-icon.svg"

const SiteBranding = () => {
    return (
        <>
            <div className="site-branding">
                <Link to={"/"} title="Urban Crew - Business Consulting">
                    <img src={siteLogoIcon} alt="siteLogoIcon" />
                </Link>
            </div>
        </>
    );
};

export default SiteBranding;
