import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.grid}>
          <h1 className={styles.title}>
            Welcome
          </h1>
        </div>
        <div className={styles.grid}>
          <a href="/category" className={styles.card}>
            <h2>Category List &rarr;</h2>
          </a>
        </div>
      </main>
    </div>
  )
}