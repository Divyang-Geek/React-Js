import { useRef, useState } from "react";

const UnControlled = () => {
    const luckyName = useRef(null);
    const [resultShow, setResultShow] = useState(false);

    const submitForm = (event) => {
        event.preventDefault();

        // console.log(luckyName);
        const name = luckyName.current.value;
        name === "" ? alert("please fill the data") : setResultShow(true);
    };
    return (
        <>
            <div className="form_sec min-vh-100 d-flex flex-column align-items-center justify-content-center bg-dark text-white">
                <form action="" onSubmit={submitForm} className="d-flex flex-column">
                    <div className="element_group d-flex flex-column mb-3">
                        <label htmlFor="luckyName">Enter Your Name</label>
                        <input type="text" id="luckyName" ref={luckyName} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
                <div className="result">{resultShow ? `Your luckyName Name Is: ${luckyName.current.value}` : ""}</div>
            </div>
        </>
    );
};

export default UnControlled;
