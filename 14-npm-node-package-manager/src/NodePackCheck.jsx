import AnalogClock from "analog-clock-react";

const NodePackCheck = () => {
    let options = {
        width: "300px",
        border: true,
        borderColor: "#2e2e2e",
        baseColor: "#17a2b8",
        centerColor: "#459cff",
        centerBorderColor: "#ffffff",
        handColors: {
            second: "#d81c7a",
            minute: "#ffffff",
            hour: "#ffffff",
        },
    };

    return (
        <>
            <AnalogClock {...options} />
        </>
    );
};

export default NodePackCheck;
