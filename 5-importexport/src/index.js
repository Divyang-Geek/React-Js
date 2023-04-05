import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import myName, { myFatherName, myNameFun, myNameFun2 } from "./App";
import * as comm from "./App";

// import App from "./App";
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

ReactDOM.render(
    <>
        <div>
            <ol>
                <li>list</li>
                <li>{comm.default}</li>
                <li>{comm.myFatherName}</li>
                <li>{comm.myNameFun()}</li>
                <li>{comm.myNameFun2()}</li>
            </ol>
        </div>
    </>,
    document.getElementById("root")
);
