import React, { useState } from "react";
import PortfolioData from "./PortfolioData";
import "../../sass/portfolio.scss";
import { Button, Card, Col, Container, Row, Stack } from "react-bootstrap";

const Portfolio = () => {
    const [items, setItems] = useState(PortfolioData);

    const filterItem = (cate) => {
        const updatedItems = PortfolioData.filter((curEle) => {
            return curEle.pCategory === cate;
        });

        setItems(updatedItems);
    };

    return (
        <>
            <div className="portfolio_sec">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h1 className="text-center mb-4">Order Your Dish</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="main_tabs">
                                <div className="tabs">
                                    <Stack direction="horizontal" gap={3} className="justify-content-center flex-wrap tab mb-5">
                                        <Button
                                            variant="outline-primary"
                                            size="lg"
                                            onClick={() => {
                                                setItems(PortfolioData);
                                            }}
                                        >
                                            All
                                        </Button>
                                        <Button
                                            variant="outline-primary"
                                            size="lg"
                                            onClick={() => {
                                                filterItem("morning");
                                            }}
                                        >
                                            Breakfast
                                        </Button>
                                        <Button
                                            variant="outline-primary"
                                            size="lg"
                                            onClick={() => {
                                                filterItem("afternoon");
                                            }}
                                        >
                                            Lunch
                                        </Button>
                                        <Button
                                            variant="outline-primary"
                                            size="lg"
                                            onClick={() => {
                                                filterItem("evening");
                                            }}
                                        >
                                            Evening
                                        </Button>
                                        <Button
                                            variant="outline-primary"
                                            size="lg"
                                            onClick={() => {
                                                filterItem("dinner");
                                            }}
                                        >
                                            Dinner
                                        </Button>
                                    </Stack>
                                    <div className="tab_content">
                                        <Row className="g-5">
                                            {items.map((elem, index) => {
                                                const { pId, pImage, pName, pCategory, pPrice, pDescription } = elem;
                                                return (
                                                    <Col lg={4} key={index}>
                                                        <Card>
                                                            <Card.Img variant="top" src={pImage} alt={pName} />
                                                            <Card.Body>
                                                                <Card.Title as="h3">{pName}</Card.Title>
                                                                <Card.Text>{pDescription}</Card.Text>
                                                                <Stack direction="horizontal" gap={3} className="justify-content-between align-items-center">
                                                                    <h5 className="m-0">{pPrice}</h5>
                                                                    <Button variant="primary" href="http://google.com">
                                                                        Order Now
                                                                    </Button>
                                                                </Stack>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                );
                                            })}
                                        </Row>
                                    </div>
                                </div>
                                {/* <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3 text-center">
                                    <Tab eventKey="all" title="All">
                                        All
                                    </Tab>
                                    <Tab eventKey="breakfast" title="Breakfast">
                                        Breakfast
                                    </Tab>
                                    <Tab eventKey="lunch" title="Lunch">
                                        Lunch
                                    </Tab>
                                    <Tab eventKey="profile" title="Evening">
                                        Evening
                                    </Tab>
                                    <Tab eventKey="dinner" title="Dinner">
                                        Dinner
                                    </Tab>
                                </Tabs> */}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Portfolio;
