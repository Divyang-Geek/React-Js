import { useEffect, useState } from "react";

const Hooks2 = () => {
    const [increaseNum, setIncreaseNum] = useState(0);

    useEffect(() => {
        document.title = `you clicked me ${increaseNum}`;
    }, [increaseNum]);

    return (
        <>
            <button
                onClick={() => {
                    setIncreaseNum(increaseNum + 1);
                }}
            >
                Click Me {increaseNum}
            </button>
        </>
    );
};

export default Hooks2;
