import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Social = ({ className }) => {
    const SocialData = [
        {
            id: 1,
            icon: <FaFacebookF />,
            url: "https://www.facebook.com/",
            title: "Follow On Facebook",
        },
        {
            id: 2,
            icon: <FaInstagram />,
            url: "https://www.instagram.com/",
            title: "Follow On Instagram",
        },
        {
            id: 3,
            icon: <FaTwitter />,
            url: "https://www.twitter.com/",
            title: "Follow On Twitter",
        },
        {
            id: 4,
            icon: <FaYoutube />,
            url: "https://www.youtube.com/",
            title: "Follow On Youtube",
        },
    ];

    return (
        <>
            <div className={`social${className ? ` ${className}` : ""}`}>
                <ul>
                    {SocialData.map((data) => {
                        const { id, url, title, icon } = data;
                        return (
                            <li key={id}>
                                <Link to={url} title={title} target="_blank">
                                    {icon}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

export default Social;
