
import styles from '@/app/page.module.css';

export default function Home() {

  return (
    <main className={styles.maincontainer}>
      <section className={styles.headersection}>
        <div className={styles.milllogo}></div>
        <h1 className={styles.heins}>Technikerwohnung "An der alten Mühle"</h1>
        
      </section>
      <section className={styles.kontaktsection}>
        <div className={styles.kontaktdaten}>
          <div className={styles.contactlogo}></div>        
          <h2>Kontakt:</h2>
          <p>Telefon: 0176 / 62709168</p>
          <a className={styles.link} href="mailto:Daniel.stranz@hotmail.com">Email: Daniel.stranz@hotmail.com</a>
          <p>Adresse: Dorfstraße 40, 25569 Bahrenfleth</p>
        </div>
        <div className={styles.formular}>
          <h2>Schicken Sie uns eine Nachricht:</h2>
          <form action="mailto:Daniel.stranz@hotmail.com" method="get" enctype="application/x-www-form-urlencoded">
           <p>Name: <input type="text" name="name"/></p>
           <p>E-Mail: <input type="text" name="email"/></p>
            <p>Nachricht:          </p>
            <textarea name="message" rows = "12" cols = "35">Schreiben Sie Ihre Nachricht an uns....</textarea>
            <p>
              <input type="submit" name="submit" value="Absenden" />
              <input type="reset" name="reset" value="Löschen" />

            </p>
          </form>
        </div>
        


      </section>
    </main>
  )
}
