import { Todo } from "../models/Todo";
import { Button, Checkbox } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

const TodoItem = observer(
  ({
    item,
    handleDelete,
    handleToggle,
  }: {
    item: Todo;
    handleDelete: (id: number) => void;
    handleToggle: (id: number) => void;
  }) => {
    const navigate = useNavigate();

    return (
      <div className="item">
            <div className="item-content" style={{
            textDecoration: item && item.completed ? 'line-through' : 'none'
        }}>
          <Checkbox
            checked={item && item.completed}
            onChange={() => handleToggle(item.id)}
          ></Checkbox>

          {item && item.task}
        </div>
        <div className="list-btns">
          <Button
            type="button"
            variant="contained"
            color="primary"
            onClick={() => navigate(`/${item.id}`)}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => handleDelete(item.id)}
          >
            Delete
          </Button>
        </div>
      </div>
    );
  }
);

export default TodoItem;
