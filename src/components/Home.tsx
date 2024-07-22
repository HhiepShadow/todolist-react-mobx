import { observer } from "mobx-react-lite";
import TodoList from "./TodoList";
import BottomBtns from "./BottomBtns";

const Home = observer(() => {
  return (
    <div>
      <TodoList />
      <BottomBtns />
    </div>
  );
});

export default Home;
