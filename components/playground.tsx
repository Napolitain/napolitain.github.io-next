import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Playground: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Maxime Boucher
      </h1>

      <p className={styles.description}>
        Développeur, architecte et chef de projet
      </p>

      <div className={styles.grid}>
        <a href="https://nextjs.org/docs" className={styles.card}>
          <h2>Documentation &rarr;</h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://nextjs.org/learn" className={styles.card}>
          <h2>Learn &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>
      </div>
    </div>
  )
}
