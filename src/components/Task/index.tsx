import { useState } from "react";
import { CheckCircle, Circle, Trash } from "@phosphor-icons/react";
import styles from "./task.module.css";

export function Task() {
  const [isHovered, setIsHovered] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <article className={styles.task}>
      <button title="Check task" onClick={toggleCheckbox}>
        {isChecked ? (
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

      <p className={isChecked ? styles.taskTextChecked : styles.taskText}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>

      <button title="Delete task" className={styles.deleteTask}>
        <Trash size={14} />
      </button>
    </article>
  );
}
