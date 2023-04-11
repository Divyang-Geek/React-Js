import { Button, Stack } from "react-bootstrap";
import { TbTrash, TbEdit } from "react-icons/tb";

const TodoItem = ({ idP, elemP, itemDeleteP, itemEditP }) => {
    return (
        <>
            <div className="todo_result_box bg-gradient px-3 py-2 rounded-2">
                <Stack direction="horizontal" gap={3}>
                    <p className="m-0 flex-fill text-start">{elemP}</p>
                    <Button
                        variant="success"
                        size="sm"
                        type="submit"
                        onClick={() => {
                            itemEditP(idP);
                        }}
                    >
                        <TbEdit />
                    </Button>
                    <Button
                        variant="danger"
                        size="sm"
                        type="submit"
                        onClick={() => {
                            itemDeleteP(idP);
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
