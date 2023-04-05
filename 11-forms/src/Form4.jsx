import { useState } from "react";

const Form4 = () => {
    const [inpName, setInpName] = useState({
        fNameOb: "",
        lNameOb: "",
    });

    const inputChange = (event) => {
        // console.log(event.target.value);
        // console.log(event.target.name);

        const inpValue = event.target.value;
        const inpName = event.target.name;

        setInpName((previousValue) => {
            // console.log(previousValue);
            if (inpName === "fName") {
                return {
                    fNameOb: inpValue,
                    lNameOb: previousValue.lNameOb,
                };
            } else if (inpName === "lName") {
                return {
                    fNameOb: previousValue.fNameOb,
                    lNameOb: inpValue,
                };
            }
        });
    };

    const submitFunc = (e) => {
        e.preventDefault();
        alert("Submitted");
    };

    return (
        <>
            <div className="formSec">
                <h2>4. Hello !!</h2>
                <ul>
                    <li>{inpName.fNameOb}</li>
                    <li>{inpName.lNameOb}</li>
                </ul>
                <form onSubmit={submitFunc}>
                    <input
                        type="text"
                        placeholder="Enter Your First Name"
                        name="fName"
                        onChange={inputChange}
                        value={inpName.fNameOb}
                    />
                    <input
                        type="text"
                        placeholder="Enter Your Last Name"
                        name="lName"
                        onChange={inputChange}
                        value={inpName.lNameOb}
                    />
                    <button type="submit">Click On Me 🖱️</button>
                </form>
            </div>
        </>
    );
};

export default Form4;
