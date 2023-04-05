// ! 1

// import { useState } from "react";

// const Form1 = () => {
//     const [name, setName] = useState("");
//     const [fullName, setFullName] = useState("");

//     const inputOnChange = (e) => {
//         // console.log(e);
//         // console.log(e.target);
//         setName(e.target.value);
//     };

//     const onSubmit = () => {
//         setFullName(name);
//     };

//     return (
//         <>
//             <div className="formSec">
//                 <h2>Hello {fullName}</h2>
//                 <input type="text" placeholder="Enter Your Name" onChange={inputOnChange} value={name} />
//                 <button onClick={onSubmit}>Click On Me 🖱️</button>
//             </div>
//         </>
//     );
// };

// export default Form1;

// ! 2

import { useState } from "react";

const Form1 = () => {
    const [name, setName] = useState("");
    const [fullName, setFullName] = useState("");

    const inputOnChange = (e) => {
        // console.log(e);
        // console.log(e.target);
        setName(e.target.value);
    };

    const onSubmitFun = (e) => {
        // console.log(e);
        e.preventDefault();
        setFullName(name);
    };

    return (
        <>
            <div className="formSec">
                <h2>1. Hello {fullName}</h2>
                <form onSubmit={onSubmitFun}>
                    <input type="text" placeholder="Enter Your Name" onChange={inputOnChange} value={name} />
                    <button type="submit">Click On Me 🖱️</button>
                </form>
            </div>
        </>
    );
};

export default Form1;
