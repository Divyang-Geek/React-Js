// ! 1

// import React from "react";

// function Card(props) {
//     return (
//         <div className="card">
//             <img src={props.cardImgSrc} className="cardImg" alt="cardImg" />
//             <div className="cardContent">
//                 <h3 className="cardContentTitle">{props.cardTitle}</h3>
//                 <p>{props.cardDesc}</p>
//             </div>
//         </div>
//     );
// }

// export default Card;

// ! 2

// import React from "react";

// function Card(props) {
//     return (
//         <div className="card">
//             <img src={props.cardImgSrc} className="cardImg" alt="cardImg" />
//             <div className="cardContent">
//                 <span>{props.cardId}</span>
//                 <h3 className="cardContentTitle">{props.cardTitle}</h3>
//                 <p>{props.cardDesc}</p>
//             </div>
//         </div>
//     );
// }

// export default Card;

// ! 3

// function Card(props) {
//     return (
//         <div className="card">
//             <img src={props.cardImgSrc} className="cardImg" alt="cardImg" />
//             <div className="cardContent">
//                 <span>{props.cardId}</span>
//                 <h3 className="cardContentTitle">{props.cardTitle}</h3>
//                 <p>{props.cardDesc}</p>
//             </div>
//         </div>
//     );
// }

// export default Card;

// ! 4 using fat arrow function

// const Card = (props) => {
//     return (
//         <div className="card">
//             <img src={props.cardImgSrcWp} className="cardImg" alt="cardImg" />
//             <div className="cardContent">
//                 <span>{props.cardIdWp}</span>
//                 <h3 className="cardContentTitle">{props.cardTitleWp}</h3>
//                 <p>{props.cardDescWp}</p>
//             </div>
//         </div>
//     );
// };

//export default Card;

// ! 5 using inner component

// import CardImg from "./CardImage";
// import CardHeading from "./CardHeading";

// const Card = (props) => {
//     return (
//         <div className="card">
//             <CardImg cardISrc={props.cardImgSrcWp} />
//             <div className="cardContent">
//                 <CardHeading cardHead={props.cardTitleWp}/>
//                 <p>{props.cardDescWp}</p>
//             </div>
//         </div>
//     );
// };

// export default Card;

// ! 6

// import CardImg from "./CardImage";
// import CardHeading from "./CardHeading";

// const Card = (props) => {
//     return (
//         <div className="card">
//             <CardImg cardISrc={props.cardImgSrcWp} />
//             <div className="cardContent">
//                 {/* <span>{props.cardIdWp}</span> */}
//                 <CardHeading cardHead={props.cardTitleWp}/>
//                 <p>{props.cardDescWp}</p>
//             </div>
//         </div>
//     );
// };

// export default Card;

// ! 7

import CardImg from "./CardImage";
import CardHeading from "./CardHeading";

const Card = (props) => {
    return (
        <div className="card">
            <CardImg cardISrc={props.cardImgSrcWp} />
            <div className="cardContent">
                <CardHeading cardHead={props.cardTitleWp} />
                <p>{props.cardDescWp}</p>
            </div>
        </div>
    );
};

export default Card;

// ! 8

// import CardImg from "./CardImage";
// import CardHeading from "./CardHeading";

// const Card = (props) => {
//     return (
//         <div className="card">
//             <CardImg cardISrc={props.cardImgSrcWp} />
//             <div className="cardContent">
//                 {/* <span>{props.cardIdWp}</span> */}
//                 <CardHeading cardHead={props.cardTitleWp} />
//                 <p>{props.cardDescWp}</p>
//             </div>
//         </div>
//     );
// };

// export default Card;
