import { createContext } from "react";
import ComA from "./ComA";

const FirstName = createContext();
const LastName = createContext();

const ComMain = () => {
    return (
        <>
            <FirstName.Provider value={"Divyang"}>
                <LastName.Provider value={"Kakadiya"}>
                    <ComA />
                </LastName.Provider>
            </FirstName.Provider>
        </>
    );
};

export default ComMain;
export { FirstName, LastName };
