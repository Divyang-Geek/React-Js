import { NavLink } from "react-router-dom";
import logo from "../images/logo.svg";

const SiteLogo = () => {
    return (
        <>
            <div className="site_logo">
                <NavLink to={"/"}>
                    <img src={logo} alt="logo" />
                </NavLink>
            </div>
        </>
    );
};

export default SiteLogo;
