import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="nav_menu">
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
