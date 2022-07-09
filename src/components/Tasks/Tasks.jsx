import { Task } from "../Task/Task";
import styles from "./Tasks.module.scss";
import { BsFileText } from "react-icons/bs";

export const Tasks = ({ tasks, onComplete, onDelete }) => {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className={styles.container}>
      <div className={styles.tasks}>
        <div className={styles.wrapper}>
          <p>Created tasks</p>
          <span>{tasksQuantity}</span>
        </div>
        <div className={styles.wrapper}>
          <p className={styles.purple_text}>Completed</p>
          <span>
            {completedTasks} of {tasksQuantity}
          </span>
        </div>
      </div>

      {!tasks.length ? (
        <div className={styles.empty}>
          <BsFileText size={50} color="#808080" />
          <h5>You have no tasks registered yet</h5>
          <p>Create tasks and organize your to-do items </p>
        </div>
      ) : (
        <div className={styles.list}>
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onComplete={onComplete}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </section>
  );
};
