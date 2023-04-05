import logo from "./Images/Google_Keep_icon.svg";

const Header = () => {
    return (
        <>
            <div className="main_header">
                <div className="container">
                    <div className="site_logo">
                        <img src={logo} alt="logo" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
