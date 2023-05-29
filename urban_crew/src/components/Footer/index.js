import { Col, Container, Row } from "react-bootstrap";
import SiteLogo from "../../components/Common/SiteLogo";
import Social from "../Common/Social";
import { Link } from "react-router-dom";
import Menu from "../Common/Menu";
import FooterMenuData from "./FooterMenuData";
import ScrollTopButton from "../Common/ScrollTopButton";
import Newsletter from "../Common/Newsletter";

const Footer = () => {

    return (
        <>
            <Newsletter />
            <footer className="site-footer secondary-bg">
                <div className="sec-wp marginX-100">
                    <Container fluid className="p-0">
                        <div className="top-footer">
                            <Row className="g-0">
                                <Col lg={4}>
                                    <div className="footer-col text-center">
                                        <SiteLogo lightLogo className="footer-logo" />
                                        <div className="footer-content">
                                            <p>I feel that I never was a greater stroke I should be incapable of drawing a single stroke at the present moment.</p>
                                        </div>
                                        <Social />
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="footer-col white-text text-center">
                                        <h3 className="h3-title">Contact Us</h3>
                                        <div className="footer-contact">
                                            <p>
                                                <strong>Tel</strong> <span>:</span> <Link to="tel:1234567890">+123 456 7890</Link>
                                            </p>
                                            <p>
                                                <strong>Fax</strong> <span>:</span> <Link to="tel:1234567890">+123 456 7890</Link>
                                            </p>
                                            <p>
                                                <strong>Email</strong> <span>:</span> <Link to="mailto:urbancrew@gmail.com">urbancrew@gmail.com</Link>
                                            </p>
                                            <p className="address">
                                                <Link>33 Bayview Avenue, Scarborough,me, 4034 United States.</Link>
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="footer-col white-text text-center">
                                        <h3 className="h3-title">Navigation</h3>
                                        <div className="footer-menu">
                                            <Menu menuData={FooterMenuData} />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="bottom-footer">
                            <Row className="align-items-lg-center flex-grow-1">
                                <Col lg={7}>
                                    <div className="bottom-footer-left white-text">
                                        <p>
                                            {`Copyright © 2023 `}
                                            <Link to="https://themeforest.net/user/geekcodelab" title="GeekCodeLab" target="_blank">
                                                GeekCodeLab
                                            </Link>
                                            {`. All Rights Reserved.`}
                                        </p>
                                    </div>
                                </Col>
                                <Col lg={5}>
                                    <div className="bottom-footer-right white-text">
                                        <ul>
                                            <li>
                                                <Link to="/" title="Terms Of Use">
                                                    Terms Of Use
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/" title="Privacy Policy">
                                                    Privacy Policy
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
                <ScrollTopButton />
            </footer>
        </>
    );
};

export default Footer;
