import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const root = document.getElementById("root");

// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

let currDate = new Date(2023, 3, 14, 17);
let currHrs = currDate.getHours();
let greetings = "";
let greetingsStyle = {
    // color: "green"
};

if (currHrs >= 1 && currHrs < 12) {
    greetings = "Good Morning";
    greetingsStyle.color = "green";
} else if (currHrs >= 12 && currHrs < 17) {
    greetings = "Good Afternoon";
    greetingsStyle.color = "red";
} else if (currHrs >= 17 && currHrs < 20) {
    greetings = "Good Evening";
    greetingsStyle.color = "orange";
} else {
    greetings = "Good Night";
    greetingsStyle.color = "yellow";
}

ReactDOM.render(
    <>
        <div className="box">
            <h1>
                Hello, <span style={greetingsStyle}>{greetings}</span>
            </h1>
        </div>
    </>,
    root
);
