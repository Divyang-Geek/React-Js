import { NavLink } from "react-router-dom";
import "../sass/navbar.scss";
import { TbMenu, TbMinus } from "react-icons/tb";
import { useState } from "react";

const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);

    const menuToggle = () => {
        // console.log(!menuActive);
        setMenuActive(!menuActive);
    };

    return (
        <>
            <div className="main_nav">
                <nav className={`${menuActive ? "active" : ""}`}>
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
                </nav>
                <button className="menu_toggle d-lg-none" onClick={menuToggle}>
                    {!menuActive ? <TbMenu /> : <TbMinus />}
                </button>
            </div>
        </>
    );
};

export default Navbar;
