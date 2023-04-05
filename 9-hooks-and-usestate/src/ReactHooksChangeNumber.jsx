// ! 1

// const ReactHooksChangeNumber = () => {
//     let count = 1;

//     const IncNum = () => {
//         return <>{console.log("Clicked", count++)}</>;
//     };

//     return (
//         <div className="reactHookSec">
//             <h2>{count}</h2>
//             <button onClick={IncNum}>Click Me</button>
//         </div>
//     );
// };

// export default ReactHooksChangeNumber;

// ! 2

import { useState } from "react";

const ReactHooksChangeNumber = () => {
    // const state = useState();
    // console.log(state);

    // ! CURRENT DATA, UPDATED DATA FUNCTION = (INITIAL DATA)

    const [count, setCount] = useState(10);

    const IncNum = () => {
        // {console.log("Clicked", count++)}
        // {setCount(25)}
        // setCount(count + 2);
        setCount(count - 2);
    };

    return (
        <div className="reactHookSec">
            <h2>{count}</h2>
            <button onClick={IncNum}>Click Me</button>
        </div>
    );
};

export default ReactHooksChangeNumber;
