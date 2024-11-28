import './TodoItem.css'
function TodoItem(props) {
    return (
      <li className="task">
        <span class="check-icon">✔</span>
        <span class="task-text">{props.text}</span>
        <span class="delete-icon">🗑</span>
      </li>
    );
}


export { TodoItem };
