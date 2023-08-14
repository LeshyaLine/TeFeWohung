import React from 'react';
import styles from '@/Komponenten/Bildergallerie/gallerie.module.css';
import Image from 'next/image';

function Gallerie() {
  return (
    <section className={styles.gallerysection}>
    <ul className={styles.first}>
      <li className={styles.li}>
        <figure className={styles.image}>
          <Image src={`/Bilder_innen/Flur.jpg`}
                  width={300}
                  height={300}
                  className={styles.nextimage}/>
        </figure>
      </li>
      <li className={styles.li}>
        <figure className={styles.image}>
          <Image src={`/Bilder_innen/BlickWOZI.jpg`}
                  width={300}
                  height={300}
                  className={styles.nextimage}/>
        </figure>
      </li>
      <li className={styles.li}>
        <figure className={styles.image}>
        <Image src={`/Bilder_innen/BlickWoZi2.jpg`}
                  width={300}
                  height={300}
                  className={styles.nextimage}/>
        </figure>
      </li>
    </ul>
    <ul className={styles.second}>
      <li className={styles.li}>
        <figure className={styles.image}>
        <Image src={`/Bilder_innen/BlickInKueche.jpg`}
                  width={300}
                  height={300}
                  className={styles.nextimage}/>
        </figure>
      </li>
      <li className={styles.li}>
        <figure className={styles.image}>
        <Image src={`/Bilder_innen/kueche.jpg`}
                  width={300}
                  height={300}
                  className={styles.nextimage}/>
        </figure>
      </li>
    </ul>
    <ul className={styles.third}>
      <li className={styles.li}>
        <figure className={styles.image}>
        <Image src={`/Bilder_innen/Schlafzimmer.jpg`}
                  width={300}
                  height={300}
                  className={styles.nextimage}/>
        </figure>
      </li>
    </ul>
  </section>
  )
}

export default Gallerie;