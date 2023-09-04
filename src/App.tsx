import "./global.css";
import { Header } from "./components/Header";
import { PlusCircle } from "@phosphor-icons/react";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <form className={styles.taskForm}>
          <input type="text" placeholder="Add a new task" />
          <button className={styles.createTaskButton}>
            <p>Create</p>
            <PlusCircle size={16} color="#F2F2F2" />
          </button>
        </form>
      </main>
    </>
  );
}

export default App;
