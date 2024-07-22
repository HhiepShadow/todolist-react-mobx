import { Todo } from "../models/Todo"

const initialData = (): Todo[] => {
    let initialValue: Todo[] = [];
    const storedTodos = localStorage.getItem('todosList');
    if (storedTodos) {
        initialValue = [...JSON.parse(storedTodos)];
    }
    return initialValue;
}

const data: Todo[] = initialData();

export default data;