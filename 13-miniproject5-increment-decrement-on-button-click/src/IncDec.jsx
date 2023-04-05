import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const IncDec = () => {
    const [num, setNum] = useState(0);

    const incNum = () => {
        setNum(num + 1);
    };

    // const decNum = () => {
    //     setNum(num - 1);
    // };

    const decNum = () => {
        if (num > 0) {
            setNum(num - 1);
        } else {
            alert("Sorry, Zero Limit Reached");
            setNum(0);
        }
    };

    return (
        <>
            <div className="incDecBox">
                <div className="incCount">{num}</div>
                <div className="buttons">
                    <button className="incBtn" onClick={incNum}>
                        <FaPlus />
                    </button>
                    <button className="decBtn" onClick={decNum}>
                        <FaMinus />
                    </button>
                </div>
            </div>
        </>
    );
};

export default IncDec;
