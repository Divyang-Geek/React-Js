import { useState } from "react";
import { Button, Stack } from "react-bootstrap";

const PortfolioTabMenu = ({ filterItemP, portCatP }) => {
    // Active Class
    const [portActive, setPortActive] = useState("All");

    const TabButton = (elem) => {
        filterItemP(elem);
        setPortActive(elem);
    };
    return (
        <>
            <Stack direction="horizontal" gap={3} className="justify-content-center flex-wrap tab mb-5">
                {portCatP.map((elem, index) => {
                    console.log(elem);
                    return (
                        <Button variant="outline-primary" size="lg" onClick={() => TabButton(elem)} className={portActive === elem ? "active" : ""} key={index}>
                            {elem}
                        </Button>
                    );
                })}
            </Stack>
        </>
    );
};

export default PortfolioTabMenu;
