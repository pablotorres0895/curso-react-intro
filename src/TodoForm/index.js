import React from "react"
import { TodoContext } from "../TodoContext"
import "./TodoForm.css"
function TodoForm(){
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (e)=>{
        e.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    const onCancel = (e)=>{
        setOpenModal(false);
    }
    const onChange = (e)=>{
        setNewTodoValue(e.target.value);
    }
    return(
        <form className="modal-overlay" onSubmit={onSubmit} >
            <div className="modal" >
                <button className="close-btn" onClick={onCancel}>
                &times;
                </button>
                <div className="modal-header"> <h3>Add new TO-DO</h3> </div>
                <div className="modal-body">
                    <input className="todo-input" type="text" placeholder="Add new TO-DO description" value={newTodoValue} onChange={onChange}></input>
                </div>
                <div className="modal-footer">

                    <button className="button cancel" onClick={onCancel}>
                        Cancel
                    </button>
                    <button className="button add">
                        Add
                    </button>
                </div>
            </div>
        </form>
        

    );
}

export { TodoForm }