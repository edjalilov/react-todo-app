import styles from "./Task.module.scss";
import { IoTrashOutline, IoCheckmarkCircle } from "react-icons/io5";

export const Task = ({ task, onComplete, onDelete }) => {
  return (
    <div className={styles.task}>
      <button
        className={styles.check_container}
        onClick={() => onComplete(task.id)}
      >
        {task.isCompleted ? (
          <IoCheckmarkCircle size={23} />
        ) : (
          <div className={styles.checkbox} />
        )}
      </button>
      <p className={task.isCompleted ? styles.text_completed : null}>
        {task.title}
      </p>
      <button
        className={styles.delete_btn}
        onClick={() =>
          window.confirm("Are you sure you want to delete this Task?") &&
          onDelete(task.id)
        }
      >
        <IoTrashOutline size={23} />
      </button>
    </div>
  );
};
