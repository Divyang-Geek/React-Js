import React from "react";
import Card from './Card';
import CardData from './CardData';

const CardNetflix = () => {
    return <Card cardImgSrcWp={CardData[1].cardImgSrc} cardTitleWp={CardData[1].cardTitle} cardDescWp={CardData[1].cardDesc} cardIdWp={CardData[1].cardId} />;
};

export default CardNetflix;
