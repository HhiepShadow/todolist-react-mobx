import { createContext } from "react";
import TodosStore from "../stores/TodosStore";
import data from "../utils/data";

const Context = createContext({
    todos: new TodosStore(data)
});

export const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const store = new TodosStore(data);
    return (
        <Context.Provider value={{todos: store}}>
            {children}
        </Context.Provider>
    )
}

export default Context;

