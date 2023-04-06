const Card = ({ serviceTitle, serviceImage, imgHeight }) => {
    return (
        <>
            <div className="card">
                <img src={serviceImage} style={{ height: imgHeight }} className="card-img-top" alt="cardImg" />
                <div className="card-body">
                    <h5 className="card-title">{serviceTitle}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">
                        Go somewhere
                    </a>
                </div>
            </div>
        </>
    );
};

export default Card;
