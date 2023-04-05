// import { useState } from "react";

// const HandlingEvents = () => {
//     let bg = "pink";
//     let bg2 = "#5c1e37";
//     const [bgChange, setBgChange] = useState(bg);

//     let btnText = "Click Me 🤞";
//     const [btnTextChange, setBtnTextChange] = useState(btnText);

//     const clickFunc = () => {
//         bg = "green";
//         setBgChange(bg);
//         console.log(bg);

//         btnText = "Ok, Now Double Click Me 🙂";
//         setBtnTextChange(btnText);
//     };

//     const doubleCLickFun = () => {
//         setBgChange(bg2);

//         // btnText = "Ohh, Great 💚";
//         setBtnTextChange(btnText);
//     };

//     return (
//         <>
//             <div className="HandlingEventsSec" style={{ backgroundColor: bgChange, padding: "30px" }}>
//                 <button onClick={clickFunc} onDoubleClick={doubleCLickFun}>
//                     {btnTextChange}
//                 </button>
//             </div>
//         </>
//     );
// };

// export default HandlingEvents;

import { useState } from "react";

const HandlingEvents = () => {
    let bg = "blue";
    const [bgChange, setBgChange] = useState(bg);

    let btnText = "Click Me 🤞";
    const [btnTextChange, setBtnTextChange] = useState(btnText);

    const clickFunc = () => {
        bg = "lightgreen";
        setBgChange(bg);

        btnText = "Ok, Now Double Click On Me 🙂";
        setBtnTextChange(btnText);
    };

    const doubleCLickFun = () => {
        bg = "green";
        setBgChange(bg);

        btnText = "Ok, Done!!";
        setBtnTextChange(btnText);
    };

    return (
        <>
            <div className="HandlingEventsSec" style={{ backgroundColor: bgChange, padding: "30px" }}>
                <button onClick={clickFunc} onDoubleClick={doubleCLickFun}>
                    {btnTextChange}
                </button>
            </div>
        </>
    );
};

export default HandlingEvents;
