import "./global.css";
import { Header } from "./components/Header";
import { PlusCircle } from "@phosphor-icons/react";
import ClipBoard from "./assets/clipboard.svg";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <form className={styles.taskForm}>
          <input placeholder="Add a new task" name="task" required />
          <button className={styles.createTaskButton} type="submit">
            <p>Create</p>
            <PlusCircle size={16} color="#F2F2F2" />
          </button>
        </form>

        <section>
          <header className={styles.tasksHeader}>
            <article className={styles.tasksCreated}>
              <p className={styles.tasksCreatedText}>Created tasks</p>
              <p className={styles.tasksAmount}>0</p>
            </article>
            <article className={styles.tasksCompleted}>
              <p className={styles.tasksCompletedText}>Completed</p>
              <p className={styles.tasksAmount}>0</p>
            </article>
          </header>

          <main className={styles.tasksMainEmpty}>
            <img src={ClipBoard} alt="Clipboard" />
            <article>
              <strong>You don't have tasks registered yet</strong>
              <p>Create tasks and organize your to-do items</p>
            </article>
          </main>
        </section>
      </main>
    </>
  );
}

export default App;
