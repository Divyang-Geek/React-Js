import { Link } from "react-router-dom";
import siteNavigationLogo from "../../assets/images/site-logo-dark.svg";

const SiteNavigationLogo = ({ className }) => {
    return (
        <>
            <div className={`site-logo ${className ? className : ""}`}>
                <Link to={"/"} title="Urban Crew - Business Consulting">
                    <img src={siteNavigationLogo} alt="siteNavigationLogo" />
                </Link>
            </div>
        </>
    );
};

export default SiteNavigationLogo;
