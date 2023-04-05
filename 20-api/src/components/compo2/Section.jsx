import { useContext } from "react";
import { ThemeContext } from "./ComMain2";

const Section = ({ title, children }) => {
    const theme = useContext(ThemeContext);
    const className = 'section-' + theme;

    return (
        <>
            <section className={className}>
                <h1>{title}</h1>
                {children}
            </section>
        </>
    );
};

export default Section;
