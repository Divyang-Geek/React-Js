import { useState } from "react";
import { TbPlus } from "react-icons/tb";

const GkCreateNote = (props) => {

    // ! This state is for expand which works click on textarea
    const [expand, setExpand] = useState(false);

    // ! This state is for get multiple field's value
    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    const inpEvent = (e) => {
        const { name, value } = e.target;

        setNote((prevData) => {
            // console.log(prevData);
            return {
                ...prevData,
                [name]: value,
            };
        });
    };

    const addEvent = () => {
        props.addNoteProp(note);
        setNote({
            title: "",
            content: "",
        });
    };

    const expandEvent = () => {
        setExpand(true);
    };

    const deExpandEvent = () => {
        setExpand(false);
    };

    return (
        <>
            <div className="gk_form shadow-lg rounded p-4">
                <form>
                    {expand ? (
                        <div className="mb-3">
                            <input type="text" name="title" className="form-control" placeholder="Title" autoComplete="off" value={note.title} onChange={inpEvent} />
                        </div>
                    ) : null}
                    <div className="mb-3">
                        <textarea name="content" className="form-control" rows="3" placeholder="Write a note..." autoComplete="off" value={note.content} onChange={inpEvent} onClick={expandEvent} onDoubleClick={deExpandEvent} />
                    </div>
                    {expand ? (
                        <div className="text-end">
                            <button type="button" className="btn btn-primary plus_btn" onClick={addEvent}>
                                <TbPlus />
                            </button>
                        </div>
                    ) : null}
                </form>
            </div>
        </>
    );
};

export default GkCreateNote;
