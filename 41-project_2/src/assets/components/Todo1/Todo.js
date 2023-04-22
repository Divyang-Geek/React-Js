import { Col, Container, Row } from "react-bootstrap";
import TodoAdd from "./TodoAdd";
import TodoResult from "./TodoResult";
import { useEffect, useState } from "react";

// Get All Data From The Local Storage
const getLocalData = () => {
    const savedList = localStorage.getItem("List");
    const parsedList = JSON.parse(savedList);

    if (savedList) {
        return parsedList;
    } else {
        return [];
    }
};

const Todo = () => {
    // This State For All Data
    const [itemData, setItemData] = useState(getLocalData());

    const [edit, setEdit] = useState(true);
    const [editData, setEditData] = useState(null);

    // This state for Edit Item
    // const [isEditItem, setIsEditItem] = useState("");

    // Add Every Item Data In Array
    const addItem = (addInputData) => {
        setItemData((oldData) => {
            return [...oldData, addInputData];
        });
    };

    // Delete Item Each Item
    const deleteEachItem = (id) => {
        // console.log(id);

        setItemData(() => {
            return itemData.filter((curElem) => {
                return curElem.id !== id;
            });
        });
    };

    // Delete All Items
    const deleteAllItems = () => {
        setItemData([]);
    };

    // Edit Item
    const editItem = (id) => {
        // console.log(id);

        const newEditItem = itemData.find((curElem) => {
            return curElem.id === id;
        });
        // console.log(newEditItem);

        setEdit(true);
        setEditData(newEditItem);

        document.querySelector(".todo_add_box form").click();

        // setIsEditItem(id);
        // setItemData(newEditItem);
    };

    // Add All Data In Local Storage
    useEffect(() => {
        localStorage.setItem("List", JSON.stringify(itemData));
    }, [itemData]);

    return (
        <>
            <div className="todo_sec bg-dark min-vh-100 py-5">
                <Container>
                    <Row>
                        <Col>
                            <div className="sec_title mb-5">
                                <h1 className="text-center text-white fw-bold">Todo App</h1>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} className="mx-auto">
                            <TodoAdd addItemP={addItem} editData={editData} edit={edit} />
                            <TodoResult itemDataP={itemData} deleteEachItemP={deleteEachItem} deleteAllItemsP={deleteAllItems} editItemP={editItem} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Todo;
