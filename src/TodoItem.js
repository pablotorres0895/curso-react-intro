import './TodoItem.css'
function TodoItem(props) {
    return (
      <li className="task">
        <span class={`check-icon ${props.completed && "check-icon--active"}`}>✔</span>
        <span class={`task-text ${props.completed && "TodoItem-p--complete"}`}>{props.text}</span>
        <span class="delete-icon">🗑</span>
      </li>
    );
}


export { TodoItem };
