import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import TodoList from "./components/TodoList";
import "./assets/css/style.css";

function App() {
  // Categories
  const categories = ["Все", "Завершенные", "Не завершенные"];
  const [activeCategory, setActiveCategory] = useState(0);

  // ToDoList
  const [tasks, setTasks] = useState([
    {
      name: "Дописать статью",
      isCompleted: false
    },
    {
      name: "Скачать сериал",
      isCompleted: true
    },
    {
      name: "Прочитать 3 главу книги",
      isCompleted: true
    },
    {
      name: "Приготовить ужин",
      isCompleted: false
    }
  ]);

  function toggleTaskCompletion(name) {
    const updatedTasks = tasks.map((task) => {
      if (task.name === name) {
        return {
          name: task.name,
          isCompleted: !task.isCompleted
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function filterTasks(activeIndex) {
    if (activeIndex === 2) {
      return tasks.filter((task) => !task.isCompleted);
    } else if (activeIndex === 1) {
      return tasks.filter((task) => task.isCompleted);
    } else {
      return tasks;
    }
  }

  return (
    <div className="app">
      <div className="app-main">
        <Header />
        <div className="app-dashboard">
          <Categories
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
          <TodoList
            toggleTaskCompletion={toggleTaskCompletion}
            tasks={filterTasks(activeCategory)}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
