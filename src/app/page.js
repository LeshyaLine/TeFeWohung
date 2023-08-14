
import styles from '@/app/page.module.css';
import Gallerie from '../Komponenten/Bildergallerie/gallerie.jsx';
import Kontakt from '@/Komponenten/Kontakt/kontakt.jsx';
import Header from '@/Komponenten/Header/header.jsx';
import Kalender from '@/Komponenten/Kalender/kalender.jsx';

export default function Home() {

  return (
    <main className={styles.maincontainer}>
      <Header/>
      <Gallerie/>
      <Kalender/>
      <Kontakt/>
      <div>© Madeline Streubel & Daniel Stranz</div>
    </main>
  )
}

