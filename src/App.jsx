import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { Header } from "./components/Header/Header";
import { Tasks } from "./components/Tasks/Tasks";

function App() {
  const [tasks, setTasks] = useState([]);

  const getTasksFromLocalStorage = () => {
    const loaded = localStorage.getItem("todo");
    if (loaded) {
      setTasks(JSON.parse(loaded));
    }
  };

  useEffect(() => {
    getTasksFromLocalStorage();
  }, []);

  const setTasksInLocalStorage = (newTasks) => {
    setTasks(newTasks);
    localStorage.setItem("todo", JSON.stringify(newTasks));
  };

  const addTask = (taskTitle) => {
    setTasksInLocalStorage([
      ...tasks,
      {
        id: uuidv4(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  };

  const toggleTaskCompletedById = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasksInLocalStorage(newTasks);
  };

  const deleteTaskById = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasksInLocalStorage(newTasks);
  };

  return (
    <>
      <Header addTask={addTask} />
      <Tasks
        tasks={tasks}
        onComplete={toggleTaskCompletedById}
        onDelete={deleteTaskById}
      />
    </>
  );
}

export default App;
