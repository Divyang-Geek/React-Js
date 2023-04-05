import { AiOutlineDelete } from "react-icons/ai";

const GkAddedList = (props) => {
    const deleteNote = () => {
        // console.log(props.deleteItem);
        props.deleteItem(props.id);
    };

    return (
        <>
            <div className="col-lg-3">
                <div className="gk_note_box shadow rounded p-4">
                    <h3>{props.title}</h3>
                    <p>{props.content}</p>
                    <button type="button" className="btn btn-danger" onClick={deleteNote}>
                        <AiOutlineDelete />
                    </button>
                </div>
            </div>
        </>
    );
};

export default GkAddedList;
