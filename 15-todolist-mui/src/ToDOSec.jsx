import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import ToDoList from "./ToDoList";

const ToDOSec = () => {
    const [inpItem, setInpItem] = useState("");
    const [btnItem, setBtnItem] = useState([]);

    const inpEvent = (e) => {
        setInpItem(e.target.value);
    };

    const btnEvent = () => {
        setBtnItem((prevVal) => {
            return [...prevVal, inpItem];
        });
        setInpItem("");
    };

    return (
        <>
            <div className="todoSec">
                <div className="todoBox">
                    <h2>To Do List</h2>
                    <div className="todoForm">
                        <input type="text" placeholder="Add an Items" value={inpItem} onChange={inpEvent} />
                        <Button variant="contained" className="NewBtn" onClick={btnEvent}>
                            <AddIcon style={{ fontSize: "40px" }} />
                        </Button>
                    </div>
                    <ul className="toDoLists">
                        {/* <li>{btnItem}</li> */}

                        {btnItem.map((iVal, index) => {
                            return <ToDoList key={index} iValProp={iVal} />;
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default ToDOSec;
