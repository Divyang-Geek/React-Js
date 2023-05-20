const SecTitle = ({ subTitle, className, children, h2Class }) => {
    return (
        <>
            <div className={`sec-title ${className ? className : ""}`}>
                {subTitle && (
                    <h4 className="sub-title">
                        {subTitle.first}
                        {subTitle.second && <span className="sub-title-line"> {subTitle.second}</span>}
                    </h4>
                )}
                {children && <h2 className={`h2-title ${h2Class ? h2Class : ""}`}>{children}</h2>}
            </div>
        </>
    );
};

export default SecTitle;
