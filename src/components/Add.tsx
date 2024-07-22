import { Button, TextField } from "@mui/material";
import { observer } from "mobx-react-lite";
import { FormEventHandler, useState } from "react";
import { useStore } from "../context/Context";
import { useNavigate } from "react-router-dom";

const Add = observer(() => {
  const [newTodo, setNewTodo] = useState<string>("");

  const store = useStore();

  const navigate = useNavigate();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (newTodo) {
      store.todos.addTodo(newTodo);
      setNewTodo("");
      navigate("/");
    }
  };

  return (
    <div className="add">
      <h2>Add new task:</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          id="newTask"
          type="text"
          required
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <Button
          fullWidth
          type="submit"
          variant="contained"
          color="success"
          style={{
            marginTop: "10px",
          }}
        >
          Add
        </Button>
      </form>
    </div>
  );
});

export default Add;
