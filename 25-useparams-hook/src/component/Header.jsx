import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/user">User</NavLink>
                </li>
                <li>
                    <NavLink to="/user/dk">dk</NavLink>
                </li>
                <li>
                    <NavLink to="/user/dk/geek">geek</NavLink>
                </li>
                <li>
                    <NavLink to="/service">Service</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </>
    );
};

export default Header;
