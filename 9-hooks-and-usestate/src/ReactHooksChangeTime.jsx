// ! 1

// const ReactHooksChangeTime = () => {
//     let currTime = new Date().toLocaleTimeString();

//     return (
//         <div className="reactHookSec">
//             <h2>{currTime}</h2>
//             <button>Click Me</button>
//         </div>
//     );
// };

// export default ReactHooksChangeTime;

// ! 2

import { useState } from "react";

const ReactHooksChangeTime = () => {
    let currPCTime = new Date().toLocaleTimeString();

    const [currTime, setCurrTime] = useState(currPCTime);

    const currTimeUpdate = () => {
        currPCTime = new Date().toLocaleTimeString();
        setCurrTime(currPCTime);
    };

    return (
        <div className="reactHookSec">
            <h2>{currTime}</h2>
            <button onClick={currTimeUpdate}>Click Me</button>
        </div>
    );
};

export default ReactHooksChangeTime;
