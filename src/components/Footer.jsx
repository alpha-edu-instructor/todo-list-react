import { useState } from "react";
import classNames from "classnames";

function Footer({ addTask }) {
  const [isOpen, setIsOpen] = useState(false);
  const [taskInput, setTaskInput] = useState("");

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
      <form
        action="#"
        className={classNames("form", {
          "form-hidden": !isOpen
        })}
        onSubmit={(e) => submitForm(e)}
      >
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
