import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SiteBranding from "../Common/SiteBranding";
import SiteLogo from "../Common/SiteLogo";
import Menu from "../Common/Menu";
import HeaderMenuData from "./HeaderMenuData";
import SiteMenu from "./SiteMenu";

const Header = () => {
    const headerSticky = (e) => {
        const head = document.querySelector(".site-header");
        const windowScrollY = window.scrollY;
        windowScrollY >= 200 ? head.classList.add("header-sticky") : head.classList.remove("header-sticky");
    };

    useEffect(() => {
        window.addEventListener("scroll", headerSticky);
        return () => {
            window.removeEventListener("scroll", headerSticky);
        };
    });

    return (
        <>
            <header className="site-header">
                <Container fluid className="p-0">
                    <Row>
                        <Col xs="auto" className="for-des">
                            <SiteBranding />
                        </Col>
                        <Col>
                            <div className="site-navigation-box">
                                <SiteLogo className="site-navigation-logo" />
                                <div className="site-navigation">
                                    <Menu menuData={HeaderMenuData} />
                                </div>
                            </div>
                        </Col>
                        <Col xs="auto" className="for-des">
                            <SiteMenu />
                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    );
};

export default Header;
