import React from "react";
import Card from "./Card";
import CardData from "./CardData";

const CardAmazon = () => {
    return <Card cardImgSrcWp={CardData[7].cardImgSrc} cardTitleWp={CardData[7].cardTitle} cardDescWp={CardData[7].cardDesc} cardIdWp={CardData[7].cardId} />;
};

export default CardAmazon;
