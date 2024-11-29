import './TodoItem.css'
function TodoItem(props) {
    return (
      <li className="task">
        <span className={`check-icon ${props.completed && "check-icon--active"}`}>✔</span>
        <span className={`task-text ${props.completed && "TodoItem-p--complete"}`}>{props.text}</span>
        <span className="delete-icon">🗑</span>
      </li>
    );
}


export { TodoItem };
