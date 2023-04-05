import { useState } from "react";

const Form2 = () => {
    const [fName, setFName] = useState("");
    const [firstName, setFirstName] = useState("");

    const [lName, setLName] = useState("");
    const [lastName, setLastName] = useState("");

    const inputOnChangeFName = (e) => {
        setFName(e.target.value);
    };

    const inputOnChangeLName = (e) => {
        setLName(e.target.value);
    };

    const onSubmitFun = (e) => {
        e.preventDefault();
        setFirstName(fName);
        setLastName(lName);
    };

    return (
        <>
            <div className="formSec">
                <h2>
                    2. Hello {firstName} {lastName}
                </h2>
                <form onSubmit={onSubmitFun}>
                    <input type="text" placeholder="Enter Your First Name" onChange={inputOnChangeFName} value={fName} />
                    <input type="text" placeholder="Enter Your Last Name" onChange={inputOnChangeLName} value={lName} />
                    <button type="submit">Click On Me 🖱️</button>
                </form>
            </div>
        </>
    );
};

export default Form2;
