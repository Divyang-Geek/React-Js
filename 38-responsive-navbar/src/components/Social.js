import { Link } from "react-router-dom";
import { TbBrandFacebook, TbBrandInstagram, TbBrandLinkedin } from "react-icons/tb";
import "../sass/social.scss";

const Social = () => {
    return (
        <>
            <div className="social">
                <ul>
                    <li>
                        <Link to={"https://www.facebook.com/"} target="_blank">
                            <TbBrandFacebook />
                        </Link>
                    </li>
                    <li>
                        <Link to={"https://www.instagram.com"} target="_blank">
                            <TbBrandInstagram />
                        </Link>
                    </li>
                    <li>
                        <Link to={"https://linkedin.com/"} target="_blank">
                            <TbBrandLinkedin />
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Social;
