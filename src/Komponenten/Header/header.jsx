import React from 'react';
import styles from '@/Komponenten/Header/header.module.css';

function Header() {
  return (
    <section className={styles.headersection}>
    <div className={styles.milllogo}></div>
    <h1 className={styles.heins}>Technikerwohnung "An der alten Mühle"</h1>
    <div className={styles.milllogo}></div>
  </section>
  )
}

export default Header