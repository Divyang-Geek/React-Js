import { NavLink } from "react-router-dom";
import logo from "../images/sitelogo.svg"

const SiteLogo = () => {
    return (
        <>
            <div className="navbar-brand site_logo">
                <NavLink to={"/"}>
                    <img src={logo} alt="" />
                </NavLink>
            </div>
        </>
     );
}

export default SiteLogo;