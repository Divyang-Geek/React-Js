import { useEffect, useState } from "react";
import { Button, Form, Stack } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";

const TodoAdd = ({ addItemP, editData, edit}) => {
    // When Type On Input
    const [inputData, setInputData] = useState("");

    // This Is Input Event Function
    const inpEvent = (event) => {
        const { value } = event.target;

        setInputData(value);
    };


    useEffect(() => {
        console.log(editData);
        setInputData(editData?.name);

    }, [editData, edit]);
    // const getData = () => {
        //     setInputData(editData);
        // };

        // if (edit) {
            //     console.log(editData);
            //     getData();
    // }

    // When Click On Button, Add Data In Array
    const submitEvent = (e) => {
        e.preventDefault();

        if (edit) {
            setInputData(editData);
        } else if (!inputData) {
            alert("Please Enter The Data");
        } else {
            // Create New Unique Id For Each Input Data
            const newInputData = {
                id: new Date().getTime().toString(),
                name: inputData,
            };
            addItemP(newInputData);
            setInputData("");
        }
    };

    return (
        <>
            <div className="todo_add_box mb-3">
                <Form onSubmit={submitEvent}>
                    <Stack gap={1} direction="horizontal">
                        <Form.Control size={"lg"} type="text" placeholder="Add Your List" value={inputData} onChange={inpEvent} />
                        <Button variant="primary" size={"lg"} type="submit">
                            <AiOutlinePlus />
                        </Button>
                    </Stack>
                </Form>
            </div>
        </>
    );
};

export default TodoAdd;
