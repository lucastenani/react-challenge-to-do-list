import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Header } from "./components/Header";
import { TaskForm } from "./components/TaskForm";
import { NoTasksMessage } from "./components/NoTasksMessage";
import { Task } from "./components/Task";
import "./global.css";
import styles from "./App.module.css";
import { TasksHeader } from "./components/TasksHeader";

export interface TasksProps {
  id: string;
  description: string;
  isComplete: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TasksProps[]>([]);

  const handleCreateNewTask = (newTaskText: string) => {
    const newTask: TasksProps = {
      id: uuidv4(),
      description: newTaskText,
      isComplete: false,
    };

    setTasks([newTask, ...tasks]);
  };

  const updateTaskStatus = (taskId: string) => {
    const tasksWithUpdatedOne: TasksProps[] = tasks.map((task) => {
      return task.id === taskId
        ? { ...task, isComplete: !task.isComplete }
        : task;
    });

    setTasks(tasksWithUpdatedOne);
  };

  const deleteTask = (taskId: string) => {
    const tasksWithoutDeletedOne: TasksProps[] = tasks.filter((task) => {
      return task.id !== taskId;
    });

    setTasks(tasksWithoutDeletedOne);
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        <TaskForm onCreateTask={handleCreateNewTask} />

        <TasksHeader tasks={tasks} />
        <section>
          {tasks.length > 0 ? (
            <main className={styles.tasksList}>
              {tasks.map((task) => {
                return (
                  <Task
                    key={task.id}
                    id={task.id}
                    description={task.description}
                    isComplete={task.isComplete}
                    onUpdateTaskStatus={updateTaskStatus}
                    onDeleteTask={deleteTask}
                  />
                );
              })}
            </main>
          ) : (
            <NoTasksMessage />
          )}
        </section>
      </main>
    </>
  );
}

export default App;
