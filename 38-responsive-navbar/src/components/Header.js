import { Col, Container, Row } from "react-bootstrap";
import Navbar from "./Navbar";
import Logo from "./Logo";
import Social from "./Social";
import "../sass/header.scss";

const Header = () => {
    return (
        <>
            <header className="main_header">
                <Container>
                    <Row>
                        <Col lg={2}>
                            <Logo />
                        </Col>
                        <Col lg={8}>
                            <Navbar />
                        </Col>
                        <Col lg={2}>
                            <Social />
                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    );
};

export default Header;
