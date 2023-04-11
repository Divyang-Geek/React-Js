import { Button, Stack } from "react-bootstrap";
import { TbTrash } from "react-icons/tb";

const TodoItem = ({ id, elemP, itemDeleteP }) => {
    return (
        <>
            <div className="todo_result_box bg-primary px-3 py-2 rounded-2">
                <Stack direction="horizontal" gap={3}>
                    <p className="m-0 flex-fill text-start">{elemP}</p>
                    <Button
                        variant="danger"
                        size="sm"
                        type="submit"
                        onClick={() => {
                            itemDeleteP(id);
                        }}
                    >
                        <TbTrash />
                    </Button>
                </Stack>
            </div>
        </>
    );
};

export default TodoItem;
