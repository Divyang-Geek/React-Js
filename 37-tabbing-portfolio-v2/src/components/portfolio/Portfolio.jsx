import React, { useState } from "react";
import PortfolioData from "./PortfolioData";
import "../../sass/portfolio.scss";
import { Col, Container, Row } from "react-bootstrap";
import PortfolioCard from "./PortfolioCard";
import PortfolioTabMenu from "./PortfolioTabMenu";

// Get All Unique Category From The Json
const portfolioCat = ["All", ...new Set(PortfolioData.map((curElement) => curElement.pCategory))];

// console.log(portfolioCat);

const Portfolio = () => {
    // This State For All Data
    const [items, setItems] = useState(PortfolioData);

    // This State For Category
    const [portCat, setPortCat] = useState(portfolioCat);



    // This filter function, this is check if same category in data then display in the column
    const filterItem = (cate) => {
        // console.log(cate);

        // This Is For All Tab
        if (cate === "All") {
            setItems(PortfolioData);
            return;
        }

        // This Is For Other All Data Without All
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
                                    {/* This Is Portfolio Tab Menu */}
                                    <PortfolioTabMenu filterItemP={filterItem} portCatP={portCat}  />

                                    <div className="tab_content">
                                        <Row className="g-5">
                                            {items.map((elem) => {
                                                const { pId } = elem;

                                                return (
                                                    <Col lg={4} key={pId}>
                                                        <PortfolioCard {...elem} />
                                                    </Col>
                                                );
                                            })}
                                        </Row>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Portfolio;
