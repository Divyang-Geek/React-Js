import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const MenuCard = ({ menuData }) => {
    return (
        <>
            {menuData.map((mData) => {
                const { id, image, name, category, price, description } = mData;
                return (
                    <Col lg={4} key={id}>
                        <div className="card">
                            <div className="card_img">
                                <img src={image} alt={name} />
                                <span className="card_number">{id}</span>
                            </div>
                            <div className="card_content">
                                <span className="card_category">{category}</span>
                                <div className="card_content_inr">
                                    <h3 className="card_title">{name}</h3>
                                    <p>{description}</p>
                                    <p>
                                        <strong>{price}</strong>
                                    </p>
                                    <Link className="card_btn">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                );
            })}
        </>
    );
};

export default MenuCard;
