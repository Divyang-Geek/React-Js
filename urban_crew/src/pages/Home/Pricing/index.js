import { Col, Container, Row } from "react-bootstrap";
import SecTitle from "../../../components/Common/SecTitle";
import PricingData from "./PricingData";
import Button from "../../../components/Common/Button";

const Pricing = () => {
    return (
        <>
            <div className="main-pricing section secondary-bg">
                <div className="sec-wp">
                    <Container>
                        <Row>
                            <Col lg={7} className="mx-auto">
                                <SecTitle subTitle={{ first: "Our", second: "Pricing" }} className="mb-80 text-center white-text" h2Class="yellow-span">
                                    Choose Your <span>Pricing</span> Plan
                                </SecTitle>
                            </Col>
                        </Row>
                        <div className="pricing-row">
                            <Row className="g-xl-5 g-lg-4 g-5">
                                {PricingData.map((data) => {
                                    const { id, icon, title, description, price, priceServices, url } = data;
                                    const { amount, currency, type } = price;
                                    return (
                                        <Col lg={4} key={id}>
                                            <div className="pricing-box text-center">
                                                <div className="pricing-box-img">
                                                    {icon}
                                                </div>
                                                <div className="pricing-box-head white-text">
                                                    <h3 className="h3-title">{title}</h3>
                                                    <p>{description}</p>
                                                </div>
                                                <div className="pricing-box-price">
                                                    <span className="currency-before">{currency}</span>
                                                    <span className="price">{amount}</span>
                                                    <span className="period">/ {type}</span>
                                                </div>
                                                <div className="services-list pricing-box-content white-text">
                                                    <ul>
                                                        {priceServices.map((data, index) => {
                                                            return (
                                                                <li key={index}>
                                                                    <span></span> {data}
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                </div>
                                                <Button text="Purchage Now" url="/" className="yellow-btn" />
                                            </div>
                                        </Col>
                                    );
                                })}
                            </Row>
                        </div>
                    </Container>
                </div>
            </div>
        </>
    );
};

export default Pricing;
