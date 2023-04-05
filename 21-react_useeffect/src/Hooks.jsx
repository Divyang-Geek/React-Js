import { useEffect, useState } from "react";

const Hooks = () => {
    const [Num, setNum] = useState(0);
    const [Num2, setNum2] = useState(0);

    // useEffect(() => {
    //     alert("Number Increased");
    // });

    // useEffect(() => {
    //     alert("Number Increased");
    //     console.log("Clicked");
    // }, []);

    useEffect(() => {
        alert("Number Increased");
        console.log("Clicked");
    }, [Num]);

    return (
        <>
            <button
                style={{ fontSize: "30px" }}
                onClick={() => {
                    setNum(Num + 1);
                }}
            >
                Click Me {Num}
            </button>
            <button
                style={{ fontSize: "30px" }}
                onClick={() => {
                    setNum2(Num2 + 1);
                }}
            >
                Click Me {Num2}
            </button>
        </>
    );
};

export default Hooks;
