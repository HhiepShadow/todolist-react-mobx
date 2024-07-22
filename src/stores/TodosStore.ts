import { action, computed, makeObservable, observable } from "mobx";
import { Todo } from "../models/Todo";

export default class TodosStore {
  todos: Todo[] = [];

  constructor(todos: Todo[]) {
    makeObservable(this, {
      todos: observable,
      getTodos: computed,
      addTodo: action,
      deleteTodo: action,
      toggleTodo: action,
      getUnfinishedTodosCount: computed,
      clearTodosList: action,
    });
    this.todos = todos;
  }

  get getTodos() {
    return this.todos;
  }

  addTodo(task: string) {
    console.log(this.todos.length);
    this.todos.push({
      id:
        this.todos.length !== 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
      task: task,
      completed: false,
    });
    this.sync();
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.sync();
  }

  toggleTodo(id: number) {
    this.todos = this.todos.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            completed: !todo.completed,
          }
        : todo
    );
    this.sync();
  }

  updateTodo(id: number, newTodo: string) {
    this.todos = this.todos.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            task: newTodo,
            completed: false,
          }
        : todo
    );
    this.sync();
  }

  get getUnfinishedTodosCount() {
    return this.todos.length;
  }

  clearTodosList() {
    this.todos.splice(0, this.todos.length);
    this.sync();
  }

  sync() {
    localStorage.setItem("todosList", JSON.stringify(this.todos));
  }
}
