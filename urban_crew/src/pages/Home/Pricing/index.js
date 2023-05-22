import { Col, Container, Row } from "react-bootstrap";
import SecTitle from "../../../components/Common/SecTitle";

const Pricing = () => {
    return (
        <>
            <div className="main-pricing section secondary-bg">
                <div className="sec-wp">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <SecTitle subTitle={{ first: "Our", second: "Pricing" }}>
                                        Choose Your <span>Pricing</span> Plan
                                </SecTitle>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
};

export default Pricing;
