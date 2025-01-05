import { useState } from "react";

function Footer({ addTask }) {
  const [isOpen, setIsOpen] = useState(false);
  const [taskInput, setTaskInput] = useState("");
  const classNames = isOpen ? "form" : "form form-hidden";

  function toggleForm() {
    setIsOpen(!isOpen);
  }

  function submitForm(event) {
    event.preventDefault();
    if (taskInput.length > 0) {
      addTask(taskInput);
      setTaskInput("");
    } else {
      alert("Заполните поле!");
    }
  }

  return (
    <footer className="app-footer">
      <form action="#" className={classNames} onSubmit={(e) => submitForm(e)}>
        <input
          type="text"
          placeholder="Введите..."
          className="form-input"
          value={taskInput}
          onChange={(event) => setTaskInput(event.target.value)}
        />
        <button className="form-btn">Добавить</button>
      </form>
      <button className="footer-btn" onClick={toggleForm}>
        {isOpen ? "-" : "+"}
      </button>
    </footer>
  );
}

export default Footer;
