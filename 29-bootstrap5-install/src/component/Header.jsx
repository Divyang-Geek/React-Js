import { NavLink } from "react-router-dom";
import SiteLogo from "../component/SiteLogo";

const Header = () => {
    return (
        <>
            <div className="main_header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <SiteLogo />
                        </div>
                        <div className="col-lg-9">
                            <div className="menu">
                                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                            <li className="nav-item">
                                                <NavLink to={"/"} className={"nav-link"}>Home</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to={"/card"} className={"nav-link"}>Card</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
