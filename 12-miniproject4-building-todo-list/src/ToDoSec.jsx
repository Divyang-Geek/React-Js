import { useState } from "react";
import ToDoList from "./ToDoList";

const ToDoSec = () => {
    // onChange input value change
    const [inputList, setInputList] = useState("");

    // onClick button change value
    const [itemsList, setItemsList] = useState([]);

    const itemListChange = (e) => {
        setInputList(e.target.value);
    };

    const itemListClick = () => {
        setItemsList((oldItems) => {
            return [...oldItems, inputList];
        });
        setInputList("");
    };

    // item remove on remove button click
    const itemRemove = (id) => {
        console.log("Deleted");

        setItemsList((oldItems) => {
            return oldItems.filter((arrEle, index)=> {
                return index !== id;
            })
        });
    };

    return (
        <>
            <div className="todoSec">
                <div className="todoBox">
                    <h2>To Do List</h2>
                    <div className="todoForm">
                        <input type="text" placeholder="Add an Items" value={inputList} onChange={itemListChange} />
                        <button className="plusBtn" onClick={itemListClick}>
                            <i className="fa-solid fa-plus"></i>
                        </button>
                    </div>
                    <ul>
                        {/* <li>{inputList}</li> */}
                        {/* <li>{itemsList}</li> */}

                        {itemsList.map((ItmVal, index) => {
                            return <ToDoList key={index} id={index} itmValProp={ItmVal} itemRemoveProp={itemRemove} />;
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default ToDoSec;
