import styles from "./Header.module.css";

export default function Header({ tytul }) {
  return (
    <header className={styles.header}>
      <h1>{tytul}</h1>
    </header>
  );
}