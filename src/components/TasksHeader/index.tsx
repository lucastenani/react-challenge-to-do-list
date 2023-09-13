import { TasksProps } from "../../App";
import styles from "./tasksHeader.module.css";

interface TasksHeaderProps {
  tasks: TasksProps[];
}

export function TasksHeader({ tasks }: TasksHeaderProps) {
  const tasksCompletedLength = tasks.filter(
    (task) => task.isComplete === true
  ).length;

  return (
    <header className={styles.tasksHeader}>
      <article className={styles.tasksCreated}>
        <p className={styles.tasksCreatedText}>Created tasks</p>
        <p className={styles.tasksAmount}>{tasks.length}</p>
      </article>
      <article className={styles.tasksCompleted}>
        <p className={styles.tasksCompletedText}>Completed</p>
        <p className={styles.tasksAmount}>
          {tasks.length > 0
            ? `${tasksCompletedLength} of ${tasks.length}`
            : "0"}
        </p>
      </article>
    </header>
  );
}
