import React from "react";

function App() {
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

    return (
        <>
            <div className="box">
                <h1>
                    Hello, <span style={greetingsStyle}>{greetings}</span>
                </h1>
            </div>
        </>
    );
}

export default App;
