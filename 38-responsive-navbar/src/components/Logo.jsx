import { Link } from "react-router-dom";
import logo from "../images/Logo.svg";

const Logo = () => {
    return (
        <>
            <div className="site_logo">
                <Link to={"/"}>
                    <img src={logo} alt="Logo" />
                </Link>
            </div>
        </>
    );
};

export default Logo;
