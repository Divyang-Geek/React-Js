import { useState } from "react";

const Form3 = () => {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");

    const [fNameClick, setFNameClick] = useState("");
    const [lNameClick, setLNameClick] = useState("");
    const [emailClick, setEmailClick] = useState("");

    const onChangeFname = (event) => {
        setFName(event.target.value);
    };

    const onChangeLname = (event) => {
        setLName(event.target.value);
    };

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const submitFunc = (event) => {
        event.preventDefault();
        setFNameClick(fName);
        setLNameClick(lName);
        setEmailClick(email);
    };

    return (
        <>
            <div className="formSec">
                <h2>3. Hello !!</h2>
                <ul>
                    <li>My First Name: {fNameClick}</li>
                    <li>My Last Name: {lNameClick}</li>
                    <li>My Email Id: {emailClick}</li>
                </ul>
                <form onSubmit={submitFunc}>
                    <input type="text" placeholder="Enter Your First Name" onChange={onChangeFname} />
                    <input type="text" placeholder="Enter Your Last Name" onChange={onChangeLname} />
                    <input type="email" placeholder="Enter Your Email" onChange={onChangeEmail} />
                    <button type="submit">Click On Me 🖱️</button>
                </form>
            </div>
        </>
    );
};

export default Form3;
