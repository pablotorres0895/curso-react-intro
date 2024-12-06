import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton'

function AppUI({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    seachedTodos,
    completeTodo,
    deleteTodo
}){
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

export { AppUI };