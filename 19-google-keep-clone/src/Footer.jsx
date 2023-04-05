const Footer = () => {
    const curYear = new Date().getFullYear();

    return (
        <>
            <div className="main_footer">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer_info text-center">© {curYear}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
