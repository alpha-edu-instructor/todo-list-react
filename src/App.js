import Header from "./components/Header";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import TodoList from "./components/TodoList";
import "./assets/css/style.css";

function App() {
  return (
    <div className="app">
      <div className="app-main">
        <Header />
        <div className="app-dashboard">
          <Categories />
          <TodoList />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
