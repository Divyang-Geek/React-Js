import { Button, Stack } from "react-bootstrap";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const TodoResults = ({ itemData, deleteEachItem, deleteAllItems, editItem }) => {
    return (
        <>
            <div className="todo_results_wrap">
                <Stack direction="horizontal" gap={3} className="mb-3">
                    <h5 className="flex-fill m-0 text-start text-white">Your Results</h5>
                    <Button variant="danger" size="sm" onClick={deleteAllItems}>
                        Clear All
                    </Button>
                </Stack>
                <div className="todo_results_boxes">
                    <Stack direction="vertical" gap={2}>
                        {itemData.map((elem) => {
                            return (
                                <div key={elem.id} className="todo_result_box bg-gradient px-3 py-2 rounded-2">
                                    <Stack direction="horizontal" gap={2}>
                                        <p className="m-0 flex-fill text-start text-white">{elem.name}</p>
                                        <Button variant="success" size="sm" onClick={() => editItem(elem.id)}>
                                            <AiOutlineEdit />
                                        </Button>
                                        <Button variant="danger" size="sm" onClick={() => deleteEachItem(elem.id)}>
                                            <AiOutlineDelete />
                                        </Button>
                                    </Stack>
                                </div>
                            );
                        })}
                    </Stack>
                </div>
            </div>
        </>
    );
};

export default TodoResults;
