const ToDoList = (props) => {
    return (
        <>
            <div className="itemListBx">
                <button
                    className="itemRemoveBtn"
                    onClick={() => {
                        props.itemRemoveProp(props.id);
                    }}
                >
                    <i className="fa-solid fa-xmark"></i>
                </button>
                <li>{props.itmValProp}</li>
            </div>
        </>
    );
};

export default ToDoList;
