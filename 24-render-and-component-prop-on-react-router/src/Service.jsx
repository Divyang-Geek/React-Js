import { useEffect } from "react";

const Service = ({ pageName }) => {
    useEffect(() => {
        document.addEventListener("click", handleClick);

        return function cleanUp() {
            document.addEventListener("click", handleClick);
        };
    });

    function handleClick() {
        console.log("Hii, I'm Called again Service useEffect");
    }

    console.log("Hii, I'm Called again Service local");

    return (
        <>
            <div className="">{pageName} Page</div>
        </>
    );
};

export default Service;
