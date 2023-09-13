import { ChangeEvent, FormEvent, useState } from "react";
import { PlusCircle } from "@phosphor-icons/react";
import styles from "./taskForm.module.css";

interface TaskFormProps {
  onCreateTask: (newTaskText: string) => void;
}

export function TaskForm({ onCreateTask }: TaskFormProps) {
  const [newTaskText, setNewTaskText] = useState("");

  const handleNewTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTaskText(event.target.value);
  };

  const handleCreateNewTask = (event: FormEvent) => {
    event.preventDefault();

    if (newTaskText.trim().length > 0) {
      onCreateTask(newTaskText);
    }

    console.log(newTaskText.trim());

    setNewTaskText("");
  };

  return (
    <form onSubmit={handleCreateNewTask} className={styles.taskForm}>
      <input
        onChange={handleNewTaskChange}
        value={newTaskText}
        placeholder="Add a new task"
        name="task"
        required
      />
      <button className={styles.createTaskButton} type="submit">
        <p>Create</p>
        <PlusCircle size={16} color="#F2F2F2" />
      </button>
    </form>
  );
}
