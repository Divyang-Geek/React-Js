import { Link } from "react-router-dom";
import SiteLogo from "../../Common/SiteLogo";
import { FaInstagram } from "react-icons/fa";
import instaImg1 from "../../../assets/images/insta-img-1.jpg";
import instaImg2 from "../../../assets/images/insta-img-2.jpg";
import instaImg3 from "../../../assets/images/insta-img-3.jpg";
import instaImg4 from "../../../assets/images/insta-img-4.jpg";
import instaImg5 from "../../../assets/images/insta-img-5.jpg";
import instaImg6 from "../../../assets/images/insta-img-6.jpg";
import Social from "../../Common/Social";

const SidebarMenu = ({ show, setShow }) => {
    const html = document.querySelector("html");

    const sideBarHide = () => {
        setShow(false);
        show && html.classList.remove("body-fixed");
    };

    const InstagramData = [
        {
            id: 1,
            image: instaImg1,
        },
        {
            id: 2,
            image: instaImg2,
        },
        {
            id: 3,
            image: instaImg3,
        },
        {
            id: 4,
            image: instaImg4,
        },
        {
            id: 5,
            image: instaImg5,
        },
        {
            id: 6,
            image: instaImg6,
        },
    ];

    return (
        <>
            <div className={`sidebar-menu${show ? " toggle-menu" : ""}`}>
                <div className="sidebar-menu-overlay" onClick={sideBarHide}></div>
                <div className="sidebar-menu-box">
                    <button className="sidebar-menu-close-btn" onClick={sideBarHide}>
                        <span></span>
                        <span></span>
                    </button>
                    <div className="sidebar-menu-inr">
                        <SiteLogo className="sidebar-menu-logo mb-40" />
                        <div className="sidebar-search search-form mb-40">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                }}
                            >
                                <div className="form-control-wrap">
                                    <input type="search" className="form-input2" placeholder="Search here..." required />
                                    <button type="submit" className="search-btn"></button>
                                    <div className="form-input-line"></div>
                                </div>
                            </form>
                        </div>
                        <div className="sidebar-text mb-40">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto porro quia cum impedit praesentium veniam.</p>
                        </div>
                        <div className="sidebar-instagram mb-40">
                            <h3 className="h3-title">Instagram</h3>
                            <div className="sidebar-insta-imgs">
                                {InstagramData.map((data) => {
                                    const { id, image } = data;
                                    return (
                                        <div className="sidebar-insta-img" key={id}>
                                            <Link>
                                                <img src={image} alt="Instagram Img" />
                                                <span className="sidebar-insta-img-overlay">
                                                    <i>
                                                        <FaInstagram />
                                                    </i>
                                                </span>
                                            </Link>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <Social className="blue-hover mb-40" />
                        <div className="sidebar-copyright">
                            <p>
                                {`Copyright © 2023 `}
                                <Link to="https://themeforest.net/user/geekcodelab" title="GeekCodeLab" target="_blank">
                                    GeekCodeLab
                                </Link>
                                {`. All Rights Reserved.`}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SidebarMenu;
