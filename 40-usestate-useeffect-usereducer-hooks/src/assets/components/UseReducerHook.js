import { useReducer, useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const reducer = (state, action) => {
    if (action.type === "INCR") {
        state = state + 1;
    }
    if (state> 0 && action.type === "DECR") {
        state = state - 1;
    }
    return state;
};

const UseReducerHook = () => {
    // const [num, setNum] = useState(0);

    const initialData = 10;
    const [state, dispatch] = useReducer(reducer, initialData);

    return (
        <>
            <div className="min-vh-100 d-flex align-items-center justify-content-center flex-column">
                <h1>{state}</h1>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="primary" size="lg" onClick={() => dispatch({ type: "INCR" })}>
                        <AiOutlinePlus />
                    </Button>
                    <Button variant="primary" size="lg" onClick={() => dispatch({ type: "DECR" })}>
                        <AiOutlineMinus />
                    </Button>
                </ButtonGroup>
            </div>
        </>
    );
};

export default UseReducerHook;
