import { observer } from "mobx-react-lite";
import { Todo } from "../models/Todo";
import TodoItem from "./TodoItem";
import { useStore } from "../context/useStore";

const TodoList = observer(() => {
  const store = useStore();

  const handleDelete = (id: number) => {
    store.todos.deleteTodo(id);
  };

  const handleToggle = (id: number) => {
    store.todos.toggleTodo(id);
  };

  return (
    <div className="list-items">
      <div className="list-header">Task List</div>
      <ul>
        {store.todos.filterTodo && store.todos.filterTodo.map((item: Todo) => (
          <TodoItem
            item={item}
            key={item.id}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        ))}
      </ul>
    </div>
  );
});

export default TodoList;
