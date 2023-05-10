import { Link } from "react-router-dom";

const Button = ({ text, className, url, type }) => {
    return (
        <>
            {url ? (
                <Link className={`sec-btn ${className ? className : ""}`} to={url} content={text}>
                    <span>{text}</span>
                </Link>
            ) : (
                <button type={type ? type : "button"} className={`sec-btn ${className ? className : ""}`} content={text}>
                    <span>{text}</span>
                </button>
            )}
        </>
    );
};

export default Button;
