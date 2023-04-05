import { createContext, useState } from "react";
import Form from "./Form";

const ThemeContext = createContext(null);

const ComMain2 = () => {

    const [chng, setChng] = useState("light");

    const changeDark = () => {
        setChng("dark");
    }

    return (
        <>
            <ThemeContext.Provider value={chng}>
                <Form />
                <button onClick={changeDark}>Click Me For Dark Mode</button>
            </ThemeContext.Provider>
        </>
    );
};

export default ComMain2;
export { ThemeContext };
