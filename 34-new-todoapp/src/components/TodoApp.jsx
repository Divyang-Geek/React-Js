import { useState } from "react";
import { Button, Col, Container, Form, Row, Stack } from "react-bootstrap";
import { TbNotes, TbLayoutGridAdd } from "react-icons/tb";
import TodoItem from "./TodoItem";

const TodoApp = () => {
    // when type on input
    const [inputData, setInputData] = useState("");

    // input search items store in array
    const [itemsData, setItemsData] = useState([]);

    // if any items not available, this will hide
    const [resultShow, setResultShow] = useState(false);

    const addItemF = () => {
        if (!inputData) {
        } else {
            setItemsData([...itemsData, inputData]);
            setInputData("");
            setResultShow(true);
        }
    };

    const submitF = (e) => {
        e.preventDefault();
    };

    // delete item
    const itemDeleteF = (id) => {
        // console.log(id);
        const updatedItems = itemsData.filter((elem, index) => {
            return index !== id;
        });
        setItemsData(updatedItems);
    };

    // delate all items
    const removeAllF = () => {
        setItemsData([]);
        setResultShow(false);
    };

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
                                            <Button variant="primary" size="lg" type="submit" onClick={addItemF}>
                                                <TbLayoutGridAdd />
                                            </Button>
                                        </Stack>
                                    </Form>
                                </div>

                                <div className="todo_results_wrap">
                                    {resultShow && (
                                        <>
                                            <Stack direction="horizontal" gap={3} className="mb-3">
                                                <h3 className="flex-fill m-0 text-start">Your Results</h3>
                                                <Button variant="danger" size="sm" type="submit" onClick={removeAllF}>
                                                    Clear All
                                                </Button>
                                            </Stack>
                                            <div className="todo_results_boxes">
                                                <Stack direction="vertical" gap={2}>
                                                    {itemsData.map((elem, indx) => {
                                                        return <TodoItem key={indx} id={indx} elemP={elem} itemDeleteP={itemDeleteF} />;
                                                    })}
                                                </Stack>
                                            </div>
                                        </>
                                    )}
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
