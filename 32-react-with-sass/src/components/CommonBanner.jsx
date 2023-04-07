import { Link } from "react-router-dom";
import bannerImg from "../images/banner-img.svg";

const CommonBanner = ({ h1Title, btnText, btnUrl }) => {
    return (
        <>
            <section className="main_banner d-flex vh-100">
                <div className="container">
                    <div className="row h-100">
                        <div className="col-lg-6 py-lg-5 pe-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <div className="banner_content">
                                <h1 className="display-1">
                                    {h1Title} <strong className="text-danger">Projects</strong>
                                </h1>
                                <p className="my-3 lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo maxime recusandae dignissimos necessitatibus nobis. Ratione sed cupiditate doloribus qui veniam?</p>
                                <Link to={btnUrl} className="btn btn-dark btn-lg">
                                    {btnText}
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 pt-lg-5 order-1 order-lg-2  d-flex flex-column justify-content-center">
                            <div className="banner_img">
                                <img src={bannerImg} alt={"bannerImg"} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CommonBanner;
