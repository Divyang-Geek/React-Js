import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import GkCreateNote from "./GkCreateNote";
import GkAddedList from "./GkAddedList";

const GoogleKeep = () => {

    // ! store all data in array
    const [addItem, setAddItem] = useState([]);

    const addNote = (note) => {
        // console.log("Clicked");
        // console.log(note);

        setAddItem((prevData) => {
            // console.log(prevData);
            // console.log(typeof prevData);

            return [...prevData, note];
        });

        // console.log(note);
        // console.log(addItem);
    };

    const onDelete = (id) => {
        // console.log(`deleted ${id}`);
        setAddItem((prevData) => {
            return prevData.filter((curData, indx) => {
                // console.log(curData);
                return indx !== id;
            });
        });
    };

    return (
        <>
            <Header />
            <div className="gk_wrapper">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <GkCreateNote addNoteProp={addNote} />
                    </div>
                </div>
                <div className="result_list">
                    <div className="row">
                        {addItem.map((iVal, index) => {
                            return <GkAddedList key={index} id={index} title={iVal.title} content={iVal.content} deleteItem={onDelete} />;
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default GoogleKeep;
