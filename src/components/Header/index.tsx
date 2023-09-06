import RocketIcon from "../../assets/rocket.svg";
import styles from "./header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={RocketIcon} alt="Rocket icon" title="Rocket icon" />
      <h1>
        to<span>do</span>
      </h1>
    </header>
  );
}
