import { useContext } from "react";
import ComC from "./ComC";
import { FirstName, LastName } from "./ComMain";

const ComB = () => {

    const fName = useContext(FirstName);
    const lName = useContext(LastName);

    return (
        <>
            <h1>{fName} {lName}</h1>
            <ComC />
        </>
    );
};

export default ComB;
