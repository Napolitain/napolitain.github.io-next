import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Playground.module.css'

const Liquipedia: NextPage = () => {
  return (
    <div className={styles.vertical}>
        <h2>Liquipedia Calendar</h2>
        <a href="https://github.com/Napolitain/liquipedia-calendar">Github</a>
        <p>Liquipedia Calendar is a CalDav webservice written in Go which uses at the moment
            Google Cloud Platform (AppEngine) as a backend. It is a calendar for Liquipedia users.
        </p>
        <a href="https://liquipedia.net/starcraft2/Liquipedia:Upcoming_and_ongoing_matches">Liquipedia:Upcoming_and_ongoing_matches</a>
        It integrates deeply with existing calendar ecosystem such as Apple Calendar, Google Calendar, Microsoft Outlook.
        <img src="https://user-images.githubusercontent.com/18146363/134248454-f5817f99-e780-431f-b56d-20a8c4d3dbfd.png" alt="action 1"/>
        <img src="https://user-images.githubusercontent.com/18146363/134247169-57a25f93-66bd-47fd-906e-38641afe084d.png" alt="action 2"/>
    </div>
  )
}

export default Liquipedia
