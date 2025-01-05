import TodoItem from "./TodoItem";

// 0 - Все - all items
// 1 - Завершенные - isCompleted: true
// 2 - Не завершенные - isCompleted: false

export default function TodoList({ tasks, toggleTaskCompletion, deleteTask }) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
          title={task.name}
          isCompleted={task.isCompleted}
          key={task}
        />
      ))}
    </ul>
  );
}
