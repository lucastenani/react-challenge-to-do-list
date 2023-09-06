import styles from "./noTasksMessage.module.css";
import ClipBoard from "../../assets/clipboard.svg";

export function NoTasksMessage() {
  return (
    <main className={styles.noTasksMessage}>
      <img src={ClipBoard} alt="Clipboard" />
      <article>
        <strong>You don't have tasks registered yet</strong>
        <p>Create tasks and organize your to-do items</p>
      </article>
    </main>
  );
}
