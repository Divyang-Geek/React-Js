const Lines = ({ children, className }) => {
    return (
        <>
            <div className={`line-wp line-wp-hover ${className ? className : ""}`}>
                <div className="line line-top"></div>
                <div className="line line-bottom"></div>
                <div className="line line-left"></div>
                <div className="line line-right"></div>
                {children}
            </div>
        </>
    );
};

export default Lines;
