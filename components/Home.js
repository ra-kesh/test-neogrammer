import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { isAuth } from '../actions/auth';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Neog Build | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <Link href="/"> Build NeoG</Link>
        </h1>

         <p className={styles.description}>
          projects built by neoGrammers for the world
        </p> 

         <div className={styles.grid}>
            <Link href="/categories/level-zero">
                <a className={styles.card}>
                  <h3>Level Zero Projects &rarr;</h3>
                </a>  
            </Link>
            <Link href="/categories/roc8hq">
                <a href="" className={styles.card}>
                  <h3>Roc8Hq Projects &rarr;</h3>
                </a>  
            </Link>
            <Link href="/categories/level-one">
                <a href="" className={styles.card}>
                   <h3>Level One Projects &rarr;</h3>
                </a>  
            </Link>

            {!isAuth() && (
              <Link href="/signin">
                <a href="" className={styles.card}>
                  <h3>Add new Project +</h3>
                </a>
              </Link>
            )}

            {isAuth() && isAuth().role === 0 && (
                <Link href="/user/crud/project">
                  <a href="" className={styles.card}>
                    <h3>Add new Project +</h3>
                  </a>
                </Link>
              )}
         
            {isAuth() && isAuth().role === 1 && (
                <Link href="/admin/crud/project">
                  <a href="" className={styles.card}>
                    <h3>Add new Project +</h3>
                  </a>
                </Link>
              )} 
        </div> 
      </main>

      {/* <footer className={styles.footer}>
        <a
          // href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          // target="_blank"
          // rel="noopener noreferrer"
        >
          devloped by rakesh kumar
        </a>
      </footer>  */}
    </div>
  )
}
