import { useEffect, useState } from "react";

import { Col, Container, Row } from "react-bootstrap";

const UseEffect = () => {
    // Window Width
    const [windowWidthCount, setWindowWidthCount] = useState(window.screen.width);
    const [windowHeightCount, setWindowHeightCount] = useState(window.screen.height);

    const actualWidth = () => {
        const windowInWidth = window.innerWidth;
        const windowInHeight = window.innerHeight;

        setWindowWidthCount(windowInWidth);
        setWindowHeightCount(windowInHeight);
    };

    useEffect(() => {
        window.addEventListener("resize", actualWidth);

        // Clean up Function
        return () => {
            window.removeEventListener("resize", actualWidth);
        };
    }, [windowWidthCount, windowHeightCount]);

    return (
        <>
            <div className="bg-light min-vh-100 d-flex text-center align-items-center">
                <Container>
                    <Row>
                        <Col>
                            <h2>Actual Size Of Window Width Is: {windowWidthCount}px</h2>
                            <h2>Actual Size Of Window Height Is: {windowHeightCount}px</h2>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default UseEffect;
