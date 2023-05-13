const SecTitle = ({ subTitleText, h2TitleText, className }) => {
    const { subFirst, subSecond } = subTitleText;
    const { h2First, h2Second, h2Third, h2Fourth } = h2TitleText;
    return (
        <>
            <div className={`sec-title ${className ? className : ""}`}>
                {subTitleText && (
                    <h4 className="sub-title">
                        {subFirst}
                        {subSecond && <span className="sub-title-line"> {subSecond}</span>}
                    </h4>
                )}

                <h2 className="h2-title yellow-span">
                    {h2First} <span>{h2Second}</span> {h2Third} <span>{h2Fourth}</span>
                </h2>
            </div>
        </>
    );
};

export default SecTitle;
