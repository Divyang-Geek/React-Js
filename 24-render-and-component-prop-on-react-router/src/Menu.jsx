import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/service">Service</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
            </ul>
        </>
     );
}

export default Menu;