import TodoItem from "./TodoItem";

const tasks = [
  {
    name: "Дописать статью",
    isCompleted: false,
  },
  {
    name: "Скачать сериал",
    isCompleted: true,
  },
  {
    name: "Прочитать 3 главу книги",
    isCompleted: true,
  },
  {
    name: "Приготовить ужин",
    isCompleted: false,
  },
];

export default function TodoList() {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <TodoItem title={task.name} isCompleted={task.isCompleted} />
      ))}
    </ul>
  );
}
