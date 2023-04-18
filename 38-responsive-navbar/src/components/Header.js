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
                        <Col lg={2} xs={3}>
                            <Logo />
                        </Col>
                        <Col lg={10} xs={9}>
                            <div className="site_navigation">
                                <Navbar />
                                <Social />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    );
};

export default Header;
