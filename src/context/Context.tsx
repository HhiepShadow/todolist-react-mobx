import { createContext, useContext } from "react";
import TodosStore from "../stores/TodosStore";
import data from "../utils/data";

const Context = createContext({
    todos: new TodosStore(data)
});

export const useStore = () => useContext(Context);
