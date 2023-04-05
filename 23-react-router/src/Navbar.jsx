// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="menu">
                <ul>
                    <li>
                        <NavLink to="/" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
