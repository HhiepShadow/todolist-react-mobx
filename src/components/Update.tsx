import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Todo } from "../models/Todo";
import { useStore } from "../context/Context";
import { observer } from "mobx-react-lite";

const Update = observer(() => {
  const store = useStore();
  const { id } = useParams();
  const navigate = useNavigate();
  const [updatedTodo, setUpdatedTodo] = useState<string>("");
  const todo: Todo | undefined = store.todos.todos.find(
    (todo) => todo.id.toString() === id
  );

  const handleUpdate = (id: number) => {
    store.todos.updateTodo(id, updatedTodo);
    navigate("/");
  };

  return (
    <div className="add">
      <h2>Update task:</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <TextField
          fullWidth
          id="newTask"
          type="text"
          required
          value={updatedTodo}
          placeholder={todo && todo.task}
          onChange={(e) => setUpdatedTodo(e.target.value)}
        />
        <Button
          fullWidth
          type="submit"
          variant="contained"
          color="warning"
          style={{
            marginTop: "10px",
          }}
          onClick={() => todo && handleUpdate(Number(id))}
        >
          Update
        </Button>
      </form>
    </div>
  );
});

export default Update;
