import { FaTrashAlt } from "react-icons/fa";
import classNames from "classnames";

export default function TodoItem({
  title,
  isCompleted,
  toggleTaskCompletion,
  deleteTask
}) {
  function toggleTask() {
    toggleTaskCompletion(title);
  }

  return (
    <li
      className={classNames("todo", {
        todo__completed: isCompleted
      })}
    >
      <span className="todo-border"></span>
      <div className="todo-part">
        <div className="todo-toggle__outer" onClick={toggleTask}>
          {isCompleted ? <div className="todo-toggle__inner"></div> : null}
        </div>
        <h4 className="todo-title">{title}</h4>
      </div>
      <div className="todo-part">
        <FaTrashAlt className="todo-delete" onClick={() => deleteTask(title)} />
      </div>
    </li>
  );
}
