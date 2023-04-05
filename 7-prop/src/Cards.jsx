// ! 1

// import React from "react";
// import Card from "./Card";

// function Cards() {
//     return (
//         <div className="cardContainer">
//             <div className="cards-title">
//                 <h2>Card Title</h2>
//             </div>
//             <div className="cards">
//                 <Card cardImgSrc="https://picsum.photos/seed/picsum/300/300" cardTitle="Card 1" cardDesc="lorem insumlorem insumlorem insumlorem insumlorem insumlorem insum" />

//                 <Card cardImgSrc="https://picsum.photos/300/300?grayscale" cardTitle="Card 2" cardDesc="lorem insumlorem insumlorem insumlorem insumlorem insumlorem insum" />

//                 <Card cardImgSrc="https://picsum.photos/seed/picsum/300/300" cardTitle="Card 3" cardDesc="lorem insumlorem insumlorem insumlorem insumlorem insumlorem insum" />

//                 <Card cardImgSrc="https://picsum.photos/300/300?grayscale" cardTitle="Card 4" cardDesc="lorem insumlorem insumlorem insumlorem insumlorem insumlorem insum" />
//             </div>
//         </div>
//     );
// }

// export default Cards;

// ! 2

// import React from "react";
// import Card from "./Card";
// import CardData from "./CardData";
// // console.log(CardData[0].cardImgSrc);

// function Cards() {
//     return (
//         <div className="cardContainer">
//             <div className="cards-title">
//                 <h2>Card Title</h2>
//             </div>
//             <div className="cards">
//                 <Card cardImgSrc={CardData[0].cardImgSrc} cardTitle={CardData[0].cardTitle} cardDesc={CardData[0].cardDesc} cardId={CardData[0].cardId} />

//                 <Card cardImgSrc={CardData[1].cardImgSrc} cardTitle={CardData[1].cardTitle} cardDesc={CardData[1].cardDesc} cardId={CardData[1].cardId} />

//                 <Card cardImgSrc={CardData[2].cardImgSrc} cardTitle={CardData[2].cardTitle} cardDesc={CardData[2].cardDesc} cardId={CardData[2].cardId} />

//                 <Card cardImgSrc={CardData[3].cardImgSrc} cardTitle={CardData[3].cardTitle} cardDesc={CardData[3].cardDesc} cardId={CardData[3].cardId} />

//                 <Card cardImgSrc={CardData[4].cardImgSrc} cardTitle={CardData[4].cardTitle} cardDesc={CardData[4].cardDesc} cardId={CardData[4].cardId} />
//             </div>
//         </div>
//     );
// }

// export default Cards;

// ! 3

// import React from "react";
// import Card from "./Card";
// import CardData from "./CardData";

// function CardDataFun(val, index) {
//     return <Card key={index} cardImgSrc={val.cardImgSrc} cardTitle={val.cardTitle} cardDesc={val.cardDesc} cardId={val.cardId} />;
// }

// function Cards() {
//     return (
//         <div className="cardContainer">
//             <div className="cards-title">
//                 <h2>Card Title</h2>
//             </div>
//             <div className="cards">{CardData.map(CardDataFun)}</div>
//         </div>
//     );
// }

// export default Cards;

// ! 4 using fat arrow function

// import Card from "./Card";
// import CardData from "./CardData";

// const Cards = () => {
//     return (
//         <div className="cardContainer">
//             <div className="cards-title">
//                 <h2>Card Title</h2>
//             </div>
//             <div className="cards">
//                 {CardData.map((val, index) => {
//                     return <Card key={index} cardImgSrcWp={val.cardImgSrc} cardTitleWp={val.cardTitle} cardDescWp={val.cardDesc} cardIdWp={val.cardId} />;
//                 })}
//             </div>
//         </div>
//     );
// };

// export default Cards;

// ! 5

// import Card from "./Card";
// import CardData from "./CardData";

// const Cards = () => {
//     return (
//         <div className="cardContainer">
//             <div className="cards-title">
//                 <h2>Card Title</h2>
//             </div>
//             <div className="cards">
//                 {CardData.map((val, index) => {
//                     return <Card key={index} cardImgSrcWp={val.cardImgSrc} cardTitleWp={val.cardTitle} cardDescWp={val.cardDesc} cardIdWp={val.cardId} />;
//                 })}
//             </div>
//         </div>
//     );
// };

// export default Cards;

// ! 6 if else

// import Card from "./Card";
// import CardData from "./CardData";

// const favSeries = "amazon";

// const FavS = () => {
//     if (favSeries === "netflix") {
//         return <Card cardImgSrcWp={CardData[1].cardImgSrc} cardTitleWp={CardData[1].cardTitle} cardDescWp={CardData[1].cardDesc} cardIdWp={CardData[1].cardId} />;
//     } else {
//         return <Card cardImgSrcWp={CardData[2].cardImgSrc} cardTitleWp={CardData[2].cardTitle} cardDescWp={CardData[2].cardDesc} cardIdWp={CardData[2].cardId} />;
//     }
// };

// const Cards = () => {
//     return (
//         <div className="cardContainer">
//             <div className="cards-title">
//                 <h2>Card Title</h2>
//             </div>
//             <div className="cards">
//                 <FavS />
//             </div>
//         </div>
//     );
// };

// export default Cards;

// ! 7 if else using different component

import CardAmazon from "./CardAmazon";
import CardNetflix from "./CardNetflix";

const favSeries = "amazon";
// const favSeries = prompt("Netflix Or Amazon Choose One");

const FavS = () => {
    if (favSeries === "netflix") {
        return <CardNetflix />;
    } else {
        return <CardAmazon />;
    }
};

const Cards = () => {
    return (
        <div className="cardContainer">
            <div className="cards-title">
                <h2>Card Title</h2>
            </div>
            <div className="cards">
                <FavS />
            </div>
        </div>
    );
};

export default Cards;

// ! 8 Ternary Operator instead of if-else

// import CardAmazon from "./CardAmazon";
// import CardNetflix from "./CardNetflix";

// const favSeries = "amazon";

// const Cards = () => {
//     return (
//         <div className="cardContainer">
//             <div className="cards-title">
//                 <h2>Card Title</h2>
//             </div>
//             <div className="cards">{favSeries === "netflix" ? <CardNetflix /> : <CardAmazon />}</div>
//         </div>
//     );
// };

// export default Cards;
