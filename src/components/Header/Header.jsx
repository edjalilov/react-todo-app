import { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";

import styles from "./Header.module.scss";
import Logo from "../../assets/Logo.svg";

export const Header = ({ addTask }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      addTask(title);
    }
    setTitle("");
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logo" />

      <form onSubmit={handleSubmit} className={styles.task_form}>
        <input
          type="text"
          placeholder="Add a new task"
          value={title}
          onChange={onChangeTitle}
        />
        <button>
          Create <IoAddCircleOutline size={20} />
        </button>
      </form>
    </header>
  );
};
