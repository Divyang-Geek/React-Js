import { Link } from "react-router-dom";
import siteNavigationLogo from "../../assets/images/site-logo-dark.svg";

const SiteNavigationLogo = ({ clsName }) => {
    return (
        <>
            <div className={`site-logo ${clsName ? clsName : ""}`}>
                <Link to={"/"} title="Urban Crew - Business Consulting">
                    <img src={siteNavigationLogo} alt="siteNavigationLogo" />
                </Link>
            </div>
        </>
    );
};

export default SiteNavigationLogo;
