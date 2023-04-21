import { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const UseStateHook = () => {
    const [num, setNum] = useState(0);

    return (
        <>
            <div className="min-vh-100 d-flex align-items-center justify-content-center flex-column">
                <h1>{num}</h1>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="primary" size="lg" onClick={() => setNum(num + 1)}>
                        <AiOutlinePlus />
                    </Button>
                    <Button variant="primary" size="lg" onClick={() => (num > 0 ? setNum(num - 1) : setNum(0))}>
                        <AiOutlineMinus />
                    </Button>
                </ButtonGroup>
            </div>
        </>
    );
};

export default UseStateHook;
