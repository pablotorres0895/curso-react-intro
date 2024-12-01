import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'
import { CreateTodoButton } from './CreateTodoButton'
import React from 'react';
import './App.css'
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

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos; 
  if (!localStorageTodos){
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  }else {
    parsedTodos = JSON.parse(localStorageTodos);
  }
  const [searchValue, setSearchValue] = React.useState('');
  const [todos, setTodos] = React.useState(parsedTodos);
  
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const seachedTodos = todos.filter( todo => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase()
    return todoText.includes(searchText)
  })
  const saveTodo = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos))
    setTodos(newTodos)
  }
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);

    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodo(newTodos);
  }
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);

    newTodos.splice(todoIndex, 1);
    saveTodo(newTodos);
  }
  return (
    <div className='todo-container'>
      
      <TodoCounter 
        completed={completedTodos} 
        total={totalTodos} />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      
      />

      <TodoList>
        {seachedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={()=>{
              completeTodo(todo.text)
            }}
            onDelete={()=>{
              deleteTodo(todo.text)
            }} />
        ))}
      </TodoList>

      <CreateTodoButton />
      
    </div>
  );
}

export default App;
