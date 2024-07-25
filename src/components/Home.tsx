import { observer } from "mobx-react-lite";
import TodoList from "./TodoList";
import BottomBtns from "./BottomBtns";
import Search from "./Search";

const Home = observer(() => {
  return (
    <div>
      <Search />
      <TodoList />
      <BottomBtns />
    </div>
  );
});

export default Home;
