import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

const ToDoList = (props) => {
    const [line, setLine] = useState(false);

    const itemBuy = () => {
        setLine(true);
    };

    return (
        <>
            <li>
                <Button variant="contained" color="error" onClick={itemBuy}>
                    <DeleteIcon />
                </Button>
                <span style={{ textDecoration: line ? "line-through" : "none" }}>{props.iValProp}</span>
            </li>
        </>
    );
};

export default ToDoList;
