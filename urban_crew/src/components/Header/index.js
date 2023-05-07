import { Col, Container, Row } from "react-bootstrap";
import SiteBranding from "../Common/SiteBranding";
import SiteNavigationLogo from "../Common/SiteNavigationLogo";
import Menu from "../Common/Menu";
import HeaderMenuData from "./HeaderMenuData";
import SiteMenu from "./SiteMenu";

const Header = () => {
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
                                <SiteNavigationLogo clsName="site-navigation-logo" />
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
