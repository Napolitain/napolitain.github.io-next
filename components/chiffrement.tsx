import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Playground.module.css'

const Chiffrement: NextPage = () => {
  return (
    <div className={styles.grid}>
        <div className="input">
            <input type="file" id="file"/>
            <input id="key-seed" type="text" placeholder="Seed key"/>
        </div>
    </div>
  )
}

export default Chiffrement