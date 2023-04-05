import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const AccordionItem = ({ accTitle, accDescription }) => {
    const [show, setShow] = useState(false);

    return (
        <>
            <div className="accordion_box">
                <div
                    className={`accordion_title ${show ? "active" : ""}`}
                    onClick={() => {
                        setShow(!show);
                    }}
                >
                    <span className="accIcon">{show ? <FaMinus /> : <FaPlus />}</span>
                    {accTitle}
                </div>
                {show && <div className="accordion_description">{accDescription}</div>}
            </div>
        </>
    );
};

export default AccordionItem;
