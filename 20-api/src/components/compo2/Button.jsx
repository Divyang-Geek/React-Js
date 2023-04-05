import { useContext } from "react";
import { ThemeContext } from "./ComMain2";

const Button = ({ children }) => {
    const theme = useContext(ThemeContext);
    const className = 'button-' + theme;

    return (
        <>
            <button className={className}>{children}</button>
        </>
    );
};

export default Button;
