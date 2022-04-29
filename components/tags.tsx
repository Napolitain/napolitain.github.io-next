import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Tags: NextPage = () => {
  return (
    <div className={styles.grid}>
      <p className={styles.card}>
        Typescript
      </p>
      <p className={styles.card}>
        Docker
      </p>
      <p className={styles.card}>
        Backend
      </p>
      <p className={styles.card}>
        Playwright E2E testing
      </p>
      <p className={styles.card}>
        Python
      </p>
      <p className={styles.card}>
        C++
      </p>
      <p className={styles.card}>
        Image processing
      </p>
      <p className={styles.card}>
        Machine learning
      </p>
      <p className={styles.card}>
        React
      </p>
      <p className={styles.card}>
        Cryptology
      </p>
      <p className={styles.card}>
        Game engine / video game
      </p>
      <p className={styles.card}>
        Unity
      </p>
      <p className={styles.card}>
        C#
      </p>
      <p className={styles.card}>
        UWP
      </p>
      <p className={styles.card}>
        Mixed reality
      </p>
      <p className={styles.card}>
        Qt
      </p>
      <p className={styles.card}>
        Flutter
      </p>
      <p className={styles.card}>
        Go
      </p>
      <p className={styles.card}>
        Firebase
      </p>
      <p className={styles.card}>
        Google Cloud Platform
      </p>
      <p className={styles.card}>
        CalDav
      </p>
      <p className={styles.card}>
        CI/CD
      </p>
    </div>
  )
}

export default Tags;