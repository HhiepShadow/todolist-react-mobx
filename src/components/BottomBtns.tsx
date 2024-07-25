import { Button } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { useStore } from "../context/useStore";

const BottomBtns = observer(() => {
    const navigate = useNavigate();
    const store = useStore();
  return (
    <div className="bottomBtns">
      <Button
        variant="contained"
        color="success"
        style={{ width: "20px", marginTop: "20px" }}
        onClick={() => navigate("/add")}
      >
        Add
      </Button>
      <Button
        variant="contained"
        color="error"
        style={{ width: "30px", marginTop: "20px" }}
        onClick={() => store.todos.clearTodosList()}
      >
        Clear
      </Button>
    </div>
  );
});

export default BottomBtns;
