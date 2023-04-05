// ! using require
// var React = require("react");
// var ReactDOM = require("react-dom");

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const root = document.getElementById("root");

// ReactDOM.render("What to show", "where to show", "callback func");
// ReactDOM.render(<h1>Hello World!!</h1>, document.getElementById("root"));

// ! using babel
// ReactDOM.render(/*#__PURE__*/ React.createElement("h1", null, "Hello World!!"), document.getElementById("root"));

// ! using js
// let h1Tag = document.createElement("h1");
// h1Tag.innerHTML = "Hello H1 Title";
// document.getElementById("root").appendChild(h1Tag);

// ! Render Multiple Elements inside ReactDOM.render()
// ! 1
// ReactDOM.render(<div><h1>Hello World!!</h1><p>Hello World!!</p></div>, document.getElementById("root"));

// ! 2
// ReactDOM.render(
//   [
//     <h1>Hello World!!</h1>,
//     <p>Hello World!! 2</p>
//   ],
//   document.getElementById("root")
// );

// ! React Fragment
// ! 1
// ReactDOM.render(
//     <React.Fragment>
//         <h1>Hello World!!</h1>
//         <p>Hello World!! 2</p>
//     </React.Fragment>,
//     document.getElementById("root")
// );

// ! 2
// ReactDOM.render(
//     <>
//         <h1>Hello World!!</h1>
//         <p>Hello World!! 2</p>
//     </>,
//     document.getElementById("root")
// );

// ! Challenge #1: Create a Simple Web App on Top 5 Netflix Series List using JSX
// ReactDOM.render(
//     <>
//         <h1>Title</h1>
//         <p>Description</p>
//         <ol>
//             <li>List</li>
//             <li>List</li>
//             <li>List</li>
//         </ol>
//     </>,
//     document.getElementById("root")
// );

// ! JavaScript Expressions in JSX
// const flName = "Divyang Kakadiya";

// ReactDOM.render(
//     <>
//         <h1>My name is {flName}</h1>
//         <h1>My lucky number is {3 + 5}</h1>
//         <h1>My lucky number is {Math.floor(Math.random() * 10)}</h1>
//     </>,
//     document.getElementById("root")
// );

// ! ES6 Template Literals in JSX
// const fName = "Divyang";
// const lName = "kakadiya";

// ReactDOM.render(
//     <>
//         {/* <h1>
//             Hello {fName} {lName}
//         </h1> */}
//         {/* <h1>
//             Hello {fName + " " + lName}
//         </h1> */}
//         <h1>{`Hello ${fName} ${lName}`}</h1>
//     </>,
//     document.getElementById("root")
// );

// ! Challenge #2: Display Current Date and Time in JSX
// const fName2 = "Divyang";
// const lName2 = "kakadiya";
// const curDate = new Date().toLocaleDateString();
// const curTime = new Date().toLocaleTimeString();

// ReactDOM.render(
//     <>
//         <h1>{`Hello, My name is ${fName2} ${lName2}`}</h1>
//         <p>Current Date is {curDate}</p>
//         <p>Current Date is {curTime}</p>
//     </>,
//     root
// );

// ! JSX Attributes
// const name = "Dk";
// const img1 = "https://picsum.photos/400/300?grayscale";
// const img2 = "https://picsum.photos/500/300?grayscale";
// const img3 = "https://picsum.photos/150/300";

// ReactDOM.render(
//     <>
//         <h1 contentEditable>my name is {name}</h1>
//         {/* <img src="https://picsum.photos/seed/picsum/400/300" alt="Random Images" /> */}
//         <img src={img1} alt="Random Images" />
//         <img src={img2} alt="Random Images" />
//         <img src={img3} alt="Random Images" />
//     </>,
//     root
// );

// ! CSS Styling & Importing CSS Files
// ReactDOM.render(
//     <>
//         <h1 className="heading">Hello</h1>
//     </>,
//     root
// );

// ! Internal CSS & Inline CSS Styling
// const heading = {
//     color: "red",
//     textTransform: "capitalize",
//     textAlign: "center",
//     fontWeight: "Bold",
//     fontSize: "34px",
// };

// ReactDOM.render(
//     <>
//         <h1
//             style={{
//                 color: "red",
//                 textTransform: "capitalize",
//                 textAlign: "center",
//                 fontWeight: "Bold",
//                 fontSize: "34px",
//             }}
//         >
//             Hello
//         </h1>
//         <h1 style={heading}>Hello</h1>
//     </>,
//     root
// );

// import React from 'react';
// import ReactDOM from 'react-dom';

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
