import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MenuApi from "./MenuApi";
import MenuCard from "./MenuCard";
import MenuTab from "./MenuTab";

// Get All The Unique Category From The Api
const uniqueCat = ["All", ...new Set(MenuApi.map((curEle) => curEle.category))];
// console.log(uniqueCat);

const Restaurant = () => {
    // Get All Data From The Api & Hold In This State
    const [menuData, setMenuData] = useState(MenuApi);

    // Get Category From Array & Hold In This State
    const [menuTabItem, setMenuTabItem] = useState(uniqueCat);

    // Filter Function For Menu Data
    const filterItem = (cat) => {
        // console.log(cat);

        if (cat === "All") {
            setMenuData(MenuApi);
            return;
        }

        setMenuData(() => {
            return MenuApi.filter((curEle) => {
                return curEle.category === cat;
            });
        });

        // if (cat === "all") {
        //     setMenuData(MenuApi);
        // } else {
        //     setMenuData(() => {
        //         return MenuApi.filter((curEle) => {
        //             return curEle.category === cat;
        //         });
        //     });
        // }
    };

    return (
        <>
            <section className="restaurant_sec min-vh-100 py-5">
                <Container>
                    <Row>
                        <Col>
                            <MenuTab filterItem={filterItem} menuTabItem={menuTabItem} />
                        </Col>
                    </Row>
                    <Row className="g-4">
                        <MenuCard menuData={menuData} />
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Restaurant;
