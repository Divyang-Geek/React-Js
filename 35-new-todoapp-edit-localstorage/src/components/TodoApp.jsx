import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Stack } from "react-bootstrap";
import { TbNotes, TbLayoutGridAdd, TbCheck } from "react-icons/tb";
import TodoItem from "./TodoItem";

// Get Items Data From The Local Storage
const getLocalItems = () => {
    const savedList = localStorage.getItem("List");
    // console.log(savedList);
    const parsedList = JSON.parse(savedList);

    if (savedList) {
        return parsedList;
    } else {
        return [];
    }
};

const TodoApp = () => {
    // When Type On Input
    const [inputData, setInputData] = useState("");

    // Input Search Items Store In Array
    const [itemsData, setItemsData] = useState(getLocalItems());

    // Toggle Submit And Edit Button
    const [toggleBtn, setToggleBtn] = useState(true);

    // Edit Items
    const [isEditedItem, setIsEditedItem] = useState(null);

    const addItemF = () => {
        if (!inputData) {
            alert("Please Fill The Data");
        } else if (inputData && !toggleBtn) {
            setItemsData(
                itemsData.map((elem) => {
                    // console.log(elem);
                    if (elem.id === isEditedItem) {
                        return { ...elem, name: inputData };
                    }
                    return elem;
                })
            );
            setToggleBtn(true);
            setInputData("");
            setIsEditedItem(null);
        } else {
            const allInputData = {
                id: new Date().getTime().toString(),
                name: inputData,
            };
            // console.log(allInputData);
            setItemsData([...itemsData, allInputData]);
            setInputData("");
        }
    };

    // Delete Each Item
    const itemDeleteF = (idP) => {
        // console.log(idP);
        const updatedItems = itemsData.filter((elem) => {
            return elem.id !== idP;
        });
        setItemsData(updatedItems);
    };

    // Delete All Items
    const removeAllF = () => {
        setItemsData([]);
    };

    // Edit Each Item
    const itemEditF = (idP) => {
        // console.log(idP);

        const newEditItem = itemsData.find((elem) => {
            return elem.id === idP;
        });
        // console.log(newEditItem);

        setToggleBtn(false);
        setInputData(newEditItem.name);
        setIsEditedItem(idP);
    };

    // On Submit This Function Call
    const submitF = (e) => {
        e.preventDefault();
    };

    // Set Data In Local Storage
    useEffect(() => {
        localStorage.setItem("List", JSON.stringify(itemsData));
    }, [itemsData]);

    return (
        <>
            <section className="min-vh-100 p-5 d-flex align-items-center bg-dark ">
                <Container>
                    <Row>
                        <Col lg={6} xs={12} className="mx-auto">
                            <div className="todo_box p-4 text-white text-center">
                                <div className="todo_box_top mb-4">
                                    <TbNotes className="text-primary mb-4" style={{ fontSize: "100px" }} />
                                    <h1 className="m-0">Add Your List Here ✌</h1>
                                </div>
                                <div className="todo_box_form mb-4">
                                    <Form onSubmit={submitF}>
                                        <Stack direction="horizontal" gap={3}>
                                            <Form.Control
                                                type="text"
                                                placeholder="Add Items..."
                                                size="lg"
                                                onChange={(e) => {
                                                    setInputData(e.target.value);
                                                }}
                                                value={inputData}
                                            />
                                            {toggleBtn ? (
                                                <Button variant="primary" size="lg" type="submit" onClick={addItemF}>
                                                    <TbLayoutGridAdd />
                                                </Button>
                                            ) : (
                                                <Button variant="success" size="lg" type="submit" onClick={addItemF}>
                                                    <TbCheck />
                                                </Button>
                                            )}
                                        </Stack>
                                    </Form>
                                </div>

                                <div className="todo_results_wrap">
                                    <Stack direction="horizontal" gap={3} className="mb-3">
                                        <h3 className="flex-fill m-0 text-start">Your Results</h3>
                                        <Button variant="danger" size="sm" type="submit" onClick={removeAllF}>
                                            Clear All
                                        </Button>
                                    </Stack>
                                    <div className="todo_results_boxes">
                                        <Stack direction="vertical" gap={2}>
                                            {itemsData.map((elem) => {
                                                return <TodoItem key={elem.id} idP={elem.id} elemP={elem.name} itemDeleteP={itemDeleteF} itemEditP={itemEditF} />;
                                            })}
                                        </Stack>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default TodoApp;
