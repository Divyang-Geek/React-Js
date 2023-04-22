import { useEffect, useState } from "react";
import { Button, Form, Stack } from "react-bootstrap";
import { AiOutlinePlus, AiOutlineEdit } from "react-icons/ai";

const TodoAdd = ({ addItem, isEditItem, toggleBtn }) => {
    // When Type On Input
    const [inputData, setInputData] = useState("");

    // This Is Input Event Function
    const inpEvent = (event) => {
        const { value } = event.target;

        setInputData(value);
    };

    // When Click On Button, Add Data In Array
    const addEvent = (e) => {
        e.preventDefault();

        if (!inputData) {
            alert("Please Enter The Data");
        } else {
            // Create New Unique Id For Each Input Data
            const newInputData = {
                id: new Date().getTime().toString(),
                name: inputData,
            };
            addItem(newInputData);
            setInputData("");
        }
    };

    // Submit
    const submitEvent = (event) => {
        event.preventDefault();
    };

    // Edit
    console.log(isEditItem);
    console.log(toggleBtn);
    // if(toggleBtn === true) {
    //     setInputData(isEditItem.name)
    // }

    // useEffect(() => {
    //     if (toggleBtn === true) {
    //         setInputData(isEditItem.name);
    //     }
    // });

    return (
        <>
            <div className="todo_add_box mb-3">
                <Form onSubmit={submitEvent}>
                    <Stack gap={1} direction="horizontal">
                        <Form.Control size={"lg"} type="text" placeholder="Add Your List" value={inputData} onChange={inpEvent} />
                        {toggleBtn ? (
                            <Button variant="success" size={"lg"} type="submit" onClick={addEvent}>
                                <AiOutlineEdit />
                            </Button>
                        ) : (
                            <Button variant="primary" size={"lg"} type="submit" onClick={addEvent}>
                                <AiOutlinePlus />
                            </Button>
                        )}
                    </Stack>
                </Form>
            </div>
        </>
    );
};

export default TodoAdd;
