import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { TodosLoading } from '../TodosLoading'
import { TodosError } from '../TodosError'
import { EmptyTodos } from '../EmptyTodos'

import { CreateTodoButton } from '../CreateTodoButton'
import { TodoContext } from '../TodoContext'
import { Modal } from '../Modal'
import React from 'react'
import { TodoForm } from '../TodoForm'

function AppUI(){
    const {
        loading,
        error,
        seachedTodos,
        completeTodo,
        deleteTodo,
        openModal
    } = React.useContext(TodoContext);
    return (
        <div className='todo-container'>
          
            <TodoCounter />
            <TodoSearch />
            
            
            <TodoList>
                {loading && <TodosLoading />}
                {error && <TodosError />}
                {(!loading && seachedTodos.length === 0) && <EmptyTodos />}
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
            <Modal>
                {openModal && (
                    <TodoForm />
                )}
            </Modal>
        </div>
     );
}

export { AppUI };