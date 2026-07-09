import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <h1>Bienvenidos a Celendín</h1>
        <p>
          Donde la naturaleza y la tradición se encuentran.
        </p>
        <button>Explorar</button>
      </div>
    </main>
  );
}