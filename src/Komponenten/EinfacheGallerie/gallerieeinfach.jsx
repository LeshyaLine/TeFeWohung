import React from 'react';
import styles from '@/Komponenten/EinfacheGallerie/gallerieeinfach.module.css';
import Image from 'next/image';

function Gallerieeinfach() {
  return (
    <section className={styles.gallerysection}>
        <h2>Gallerie:</h2>
        <main className={styles.gallery}>
            <figure className={styles.figure}>
                <Image className={styles.image}
                        src={'/Bilder_innen/Flur.jpg'}
                        width={300}
                        height={300}/>
            </figure>
            <figure className={styles.figure}>
                <Image className={styles.image}
                        src={'/Bilder_innen/Badezimmer.jpg'}
                        width={300}
                        height={300}/>
            </figure>
            <figure className={styles.figure}>
                <Image className={styles.image}
                        src={'/Bilder_innen/BlickInKueche.jpg'}
                        width={300}
                        height={300}/>
            </figure>
            <figure className={styles.figure}>
                <Image className={styles.image}
                        src={'/Bilder_innen/BlickWOZI.jpg'}
                        width={300}
                        height={300}/>
            </figure>
            <figure className={styles.figure}>
                <Image className={styles.image}
                        src={'/Bilder_innen/BlickWoZi2.jpg'}
                        width={300}
                        height={300}/>
            </figure>
            <figure className={styles.figure}>
                <Image className={styles.image}
                        src={'/Bilder_innen/kueche.jpg'}
                        width={300}
                        height={300}/>
            </figure>
            <figure className={styles.figure}>
                <Image className={styles.image}
                        src={'/Bilder_innen/Schlafzimmer.jpg'}
                        width={300}
                        height={300}/>
            </figure>
        </main>
    </section>
  )
}

export default Gallerieeinfach