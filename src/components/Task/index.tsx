import { useState } from "react";
import { CheckCircle, Circle, Trash } from "@phosphor-icons/react";
import styles from "./task.module.css";
import { TasksProps } from "../../App";

interface TaskPropsWithToggle extends TasksProps {
  onUpdateTaskStatus: (taskId: string) => void;
  onDeleteTask: (taskId: string) => void;
}

export function Task({
  description,
  id,
  isComplete,
  onDeleteTask,
  onUpdateTaskStatus,
}: TaskPropsWithToggle) {
  const [isHovered, setIsHovered] = useState(false);

  const toggleCheckbox = () => {
    onUpdateTaskStatus(id);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleDeleteTask = () => {
    onDeleteTask(id);
  };

  return (
    <article className={styles.task}>
      <button title="Check task" onClick={toggleCheckbox}>
        {isComplete ? (
          <CheckCircle size={24} className={styles.checkCircle} weight="fill" />
        ) : (
          <Circle
            size={24}
            className={styles.taskCheckbox}
            weight={isHovered ? "duotone" : "light"}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        )}
      </button>

      <p className={isComplete ? styles.taskTextChecked : styles.taskText}>
        {description}
      </p>

      <button
        title="Delete task"
        className={styles.deleteTask}
        onClick={handleDeleteTask}
      >
        <Trash size={14} />
      </button>
    </article>
  );
}
