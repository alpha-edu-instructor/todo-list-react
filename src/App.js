import { useEffect, useState } from "react";
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
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // componentDidMount
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    // componentDidUpdate
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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

  function addTask(name) {
    const newTask = {
      name: name,
      isCompleted: false
    };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(name) {
    const updatedTasks = tasks.filter((task) => task.name !== name);
    setTasks(updatedTasks);
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
            deleteTask={deleteTask}
            tasks={filterTasks(activeCategory)}
          />
        </div>
        <Footer addTask={addTask} />
      </div>
    </div>
  );
}

export default App;
