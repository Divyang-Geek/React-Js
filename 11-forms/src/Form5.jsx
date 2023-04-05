import { useState } from "react";

const Form5 = () => {
    const [inpName, setInpName] = useState({
        fNameOb: "",
        lNameOb: "",
        emailOb: "",
        numberOb: "",
    });

    const inputChange = (e) => {
        const { value: iValue, name: iName } = e.target;

        setInpName((prevVal) => {
            if (iName === "fName") {
                return {
                    fNameOb: iValue,
                    lNameOb: prevVal.lNameOb,
                    emailOb: prevVal.emailOb,
                    numberOb: prevVal.numberOb,
                };
            } else if (iName === "lName") {
                return {
                    fNameOb: prevVal.fNameOb,
                    lNameOb: iValue,
                    emailOb: prevVal.emailOb,
                    numberOb: prevVal.numberOb,
                };
            } else if (iName === "email") {
                return {
                    fNameOb: prevVal.fNameOb,
                    lNameOb: prevVal.lNameOb,
                    emailOb: iValue,
                    numberOb: prevVal.numberOb,
                };
            } else if (iName === "number") {
                return {
                    fNameOb: prevVal.fNameOb,
                    lNameOb: prevVal.lNameOb,
                    emailOb: prevVal.emailOb,
                    numberOb: iValue,
                };
            }
        });
    };

    const submitFunc = (e) => {
        e.preventDefault();
        alert("Form Submitted");
    };

    return (
        <>
            <div className="formSec">
                <h2>5. Hello !!</h2>
                <ul>
                    <li>{inpName.fNameOb}</li>
                    <li>{inpName.lNameOb}</li>
                    <li>{inpName.emailOb}</li>
                    <li>{inpName.numberOb}</li>
                </ul>
                <form onSubmit={submitFunc}>
                    <input type="text" placeholder="Enter Your First Name" name="fName" onChange={inputChange} value={inpName.fNameOb} />
                    <input type="text" placeholder="Enter Your Last Name" name="lName" onChange={inputChange} value={inpName.lNameOb} />
                    <input type="email" placeholder="Enter Your Email" name="email" onChange={inputChange} value={inpName.emailOb} />
                    <input type="number" placeholder="Enter Your Number" name="number" onChange={inputChange} value={inpName.numberOb} />
                    <button type="submit">Click On Me 🖱️</button>
                </form>
            </div>
        </>
    );
};

export default Form5;
