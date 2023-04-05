import { useState } from "react";
import { AccApi } from "./AccAPI";
import "./accordion.css";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
    const [accData, setAccData] = useState(AccApi);

    return (
        <>
            <div className="accordions">
                {accData.map((curItem) => {
                    const { id } = curItem;
                    return <AccordionItem key={id} {...curItem} />;
                })}
            </div>
        </>
    );
};

export default Accordion;
