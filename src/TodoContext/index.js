import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }){
    const {
        item: todos, 
        saveItem: saveTodo, 
        loading, 
        error
    } = useLocalStorage('TODOS_V1', []); 
    const [searchValue, setSearchValue] = React.useState('');
      
        const completedTodos = todos.filter(todo => !!todo.completed).length;
        const totalTodos = todos.length;
        const seachedTodos = todos.filter( todo => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase()
            return todoText.includes(searchText)
        })
      
    const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodo(newTodos);
    }
    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    
        newTodos.splice(todoIndex, 1);
        saveTodo(newTodos);
    }
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            seachedTodos,
            completeTodo,
            deleteTodo
        }}>
            { children }
        </TodoContext.Provider>
    );
}


export { TodoContext, TodoProvider }

/*
const defaultTodos = [
  { text:'Peinar Gatos', completed: true},
  { text:'Dar de comer a los Gatos', completed: false},
  { text:'Jugar Fulbo', completed: false},
  { text:'Ver tutoriales', completed: true},
  { text:'Ver tutoriales 2', completed: true}
] 

localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
*/