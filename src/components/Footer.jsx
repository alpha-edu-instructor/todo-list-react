import { useState } from "react";

function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const classNames = isOpen ? "form" : "form form-hidden";

  function toggleForm() {
    setIsOpen(!isOpen);
  }

  return (
    <footer className="app-footer">
      <form action="#" className={classNames}>
        <input type="text" placeholder="Введите..." className="form-input" />
        <button className="form-btn">Добавить</button>
      </form>
      <button className="footer-btn" onClick={toggleForm}>
        {isOpen ? "-" : "+"}
      </button>
    </footer>
  );
}

export default Footer;
