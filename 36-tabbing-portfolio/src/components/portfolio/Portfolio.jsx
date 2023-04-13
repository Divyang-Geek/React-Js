import React from "react";
import PortfolioData from "./PortfolioData";
import "../../sass/portfolio.scss";
import { Button } from "react-bootstrap";

const Portfolio = () => {
    return (
        <>
            <div className="portfolio_sec">
                <Button variant="info">Info</Button>
                <Button variant="dark">Dark</Button>
            </div>
        </>
    );
};

export default Portfolio;
