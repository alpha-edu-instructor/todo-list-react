import TodoItem from "./TodoItem";

// 0 - Все - all items
// 1 - Завершенные - isCompleted: true
// 2 - Не завершенные - isCompleted: false

export default function TodoList({ tasks, toggleTaskCompletion }) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          toggleTaskCompletion={toggleTaskCompletion}
          title={task.name}
          isCompleted={task.isCompleted}
        />
      ))}
    </ul>
  );
}
