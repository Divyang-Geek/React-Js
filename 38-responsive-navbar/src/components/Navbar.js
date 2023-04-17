import { NavLink } from "react-router-dom";
import "../sass/navbar.scss";

const Navbar = () => {
    return (
        <>
            <div className="main_nav">
                <ul>
                    <li>
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/about"}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/service"}>Service</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contact"}>Contact</NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
