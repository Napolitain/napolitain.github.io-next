import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Chiffrement from './chiffrement'

const Playground: NextPage = () => {
  return (
    <div>
      <Chiffrement></Chiffrement>
    </div>
  )
}

export default Playground