import { useState } from "react";

const Form6 = () => {
    const [inpName, setInpName] = useState({
        fName: "",
        lName: "",
        email: "",
        number: "",
    });

    const inputChange = (e) => {
        const { value: iValue, name: iName } = e.target;

        // console.log(iValue);
        // console.log(iName);

        setInpName((prevVal) => {
            // console.log(prevVal);
            console.log([iName]);
            return {
                ...prevVal,
                [iName]: iValue,
            };
        });
    };

    const submitFunc = (e) => {
        e.preventDefault();
        alert("Form Submitted");
    };

    return (
        <>
            <div className="formSec">
                <h2>6. Hello !!</h2>
                <ul>
                    <li>{inpName.fName}</li>
                    <li>{inpName.lName}</li>
                    <li>{inpName.email}</li>
                    <li>{inpName.number}</li>
                </ul>
                <form onSubmit={submitFunc}>
                    <input type="text" placeholder="Enter Your First Name" name="fName" onChange={inputChange} value={inpName.fName} />
                    <input type="text" placeholder="Enter Your Last Name" name="lName" onChange={inputChange} value={inpName.lName} />
                    <input type="email" placeholder="Enter Your Email" name="email" onChange={inputChange} value={inpName.email} />
                    <input type="number" placeholder="Enter Your Number" name="number" onChange={inputChange} value={inpName.number} />
                    <button type="submit">Click On Me 🖱️</button>
                </form>
            </div>
        </>
    );
};

export default Form6;
