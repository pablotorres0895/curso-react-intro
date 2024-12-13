import React from "react"
import { TodoContext } from "../TodoContext"
import "./TodoForm.css"
function TodoForm(){

    const {openModal,
        setOpenModal
    } = React.useContext(TodoContext)
    return(
        <div className="modal-overlay" >
            <div className="modal" >
                <button className="close-btn" onClick={(e)=>{
                        setOpenModal(!openModal)
                    }}>
                &times;
                </button>
                <div className="modal-header"> <h3>Add new TO-DO</h3> </div>
                <div className="modal-body">
                    <input className="todo-input" type="text" placeholder="Add new TO-DO description"></input>
                </div>
                <div className="modal-footer">
                    <button className="button add">
                        Add
                    </button>
                    <button className="button cancel" onClick={(e)=>{
                        setOpenModal(!openModal)
                    }}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
        

    );
}

export { TodoForm }