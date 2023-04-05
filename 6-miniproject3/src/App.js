import React from "react";
import { add, sub, mult, div } from "./Calculator";

function App() {
    return (
        <>
            <ul>
                <li>{add(100, 4)}</li>
                <li>{sub(100, 4)}</li>
                <li>{mult(100, 4)}</li>
                <li>{div(100, 4)}</li>
                <li>{div(100, 3)}</li>
            </ul>
        </>
    );
}

export default App;
