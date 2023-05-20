import { Container } from "react-bootstrap";
import { CounterData } from "./CounterData";

const Counter = () => {
    return (
        <>
            <section className="main-counter section">
                <div className="marginX-100">
                    <Container fluid className="g-0">
                        <div className="counter-row">
                            <div className="counter-row-inr">
                                {CounterData.map((data) => {
                                    const { id, count, description } = data;
                                    const { title, value } = count;

                                    return (
                                        <div className="counter-box" key={id}>
                                            <div className="counter-box-inr">
                                                <span className="counter-box-ripple"></span>
                                                <div className="counter-box-inr-content">
                                                    <div className="counter-box-title">
                                                        <span className="count">{value} </span>
                                                        {title}
                                                    </div>
                                                    <p>{description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    );
};

export default Counter;
