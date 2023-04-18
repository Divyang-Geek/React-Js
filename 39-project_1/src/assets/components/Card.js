import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
    return (
        <>
            <div className="card">
                <div className="card_img">
                    <img src="" alt="" />
                    <span className="card_number">1</span>
                </div>
                <div className="card_content">
                    <span className="card_category">Breakfast</span>
                    <h3 className="card_title">Lorem Ipsum</h3>
                    <p>lorem ipsum data</p>
                    <Link className="card_btn">Read More</Link>
                </div>
            </div>
        </>
    );
};

export default Card;
