import SiteNavigationLogo from "../../Common/SiteNavigationLogo";

const SidebarMenu = ({ show, setShow }) => {
    const sideBarHide = () => {
        setShow(false);
    };

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
                        <SiteNavigationLogo clsName="sidebar-menu-logo mb-40" />
                        <div className="sidebar-search search-form mb-40">
                            <form>
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
                        {/* <div className="sidebar-instagram mb-40">
                            <h3 className="h3-title">Instagram</h3>
                            <div className="sidebar-insta-imgs">
                                <div className="sidebar-insta-img">
                                    <a
                                        href="assets/images/insta-img-1.jpg"
                                        data-fancybox="insta-img"
                                    >
                                        <img
                                            src="assets/images/insta-img-1.jpg"
                                            alt="insta-img"
                                        />
                                        <span className="sidebar-insta-img-overlay">
                                            <i
                                                className="fab fa-instagram"
                                                aria-hidden="true"
                                            ></i>
                                        </span>
                                    </a>
                                </div>
                                <div className="sidebar-insta-img">
                                    <a
                                        href="assets/images/insta-img-2.jpg"
                                        data-fancybox="insta-img"
                                    >
                                        <img
                                            src="assets/images/insta-img-2.jpg"
                                            alt="insta-img"
                                        />
                                        <span className="sidebar-insta-img-overlay">
                                            <i
                                                className="fab fa-instagram"
                                                aria-hidden="true"
                                            ></i>
                                        </span>
                                    </a>
                                </div>
                                <div className="sidebar-insta-img">
                                    <a
                                        href="assets/images/insta-img-3.jpg"
                                        data-fancybox="insta-img"
                                    >
                                        <img
                                            src="assets/images/insta-img-3.jpg"
                                            alt="insta-img"
                                        />
                                        <span className="sidebar-insta-img-overlay">
                                            <i
                                                className="fab fa-instagram"
                                                aria-hidden="true"
                                            ></i>
                                        </span>
                                    </a>
                                </div>
                                <div className="sidebar-insta-img">
                                    <a
                                        href="assets/images/insta-img-4.jpg"
                                        data-fancybox="insta-img"
                                    >
                                        <img
                                            src="assets/images/insta-img-4.jpg"
                                            alt="insta-img"
                                        />
                                        <span className="sidebar-insta-img-overlay">
                                            <i
                                                className="fab fa-instagram"
                                                aria-hidden="true"
                                            ></i>
                                        </span>
                                    </a>
                                </div>
                                <div className="sidebar-insta-img">
                                    <a
                                        href="assets/images/insta-img-5.jpg"
                                        data-fancybox="insta-img"
                                    >
                                        <img
                                            src="assets/images/insta-img-5.jpg"
                                            alt="insta-img"
                                        />
                                        <span className="sidebar-insta-img-overlay">
                                            <i
                                                className="fab fa-instagram"
                                                aria-hidden="true"
                                            ></i>
                                        </span>
                                    </a>
                                </div>
                                <div className="sidebar-insta-img">
                                    <a
                                        href="assets/images/insta-img-6.jpg"
                                        data-fancybox="insta-img"
                                    >
                                        <img
                                            src="assets/images/insta-img-6.jpg"
                                            alt="insta-img"
                                        />
                                        <span className="sidebar-insta-img-overlay">
                                            <i
                                                className="fab fa-instagram"
                                                aria-hidden="true"
                                            ></i>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="social blue-hover mb-40">
                    <ul>
                        <li><a href="javascript:void(0);" title="Follow On Facebook"><i className="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                        <li><a href="javascript:void(0);" title="Follow On Instagram"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                        <li><a href="javascript:void(0);" title="Follow On Twitter"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="javascript:void(0);" title="Follow On Youtube"><i className="fab fa-youtube" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
                <div className="sidebar-copyright">
                    <p>Copyright © 2023 <a href="https://themeforest.net/user/geekcodelab" title="GeekCodeLab" target="_blank">GeekCodeLab</a>.
                        <span className="d-block">All Rights Reserved.</span>
                    </p>
                </div> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SidebarMenu;
