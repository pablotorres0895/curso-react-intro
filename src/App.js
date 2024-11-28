import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'
import { CreateTodoButton } from './CreateTodoButton'
import React from 'react';
import './App.css'
const defaultTodos = [
  { text:'Peinar Gatos', completed: true},
  { text:'Dar de comer a los Gatos', completed: false},
  { text:'Jugar Fulbo', completed: false},
  { text:'Ver tutoriales', completed: true}
]

function App() {
  return (
    <div className='todo-container'>
      
      <TodoCounter completed={16} total={20} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed} />
        ))}
      </TodoList>

      <CreateTodoButton />
      
    </div>
  );
}

export default App;
