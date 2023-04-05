import { useState } from "react";

const ReactHooksDigitalClock = () => {
    let currPCTime = new Date().toLocaleTimeString();

    const [currTime, setCurrTime] = useState(currPCTime);

    // const updateTime = () => {
    //     currPCTime = new Date().toLocaleTimeString();
    //     setCurrTime(currPCTime);
    // };

    // setInterval(updateTime, 1000);

    // const updateTime = () => {
    //     currPCTime = new Date().toLocaleTimeString();
    //     setCurrTime(currPCTime);
    // };

    setInterval(() => {
        currPCTime = new Date().toLocaleTimeString();
        setCurrTime(currPCTime);
    }, 1000);

    return (
        <>
            <h2>{currTime}</h2>
        </>
    );
};

export default ReactHooksDigitalClock;
