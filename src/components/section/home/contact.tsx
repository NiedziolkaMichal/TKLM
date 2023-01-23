import styles from "../../../../styles/Home.module.css";
import IconPhone from "/public/img/icon/icon-phone.svg";
import IconEmail from "/public/img/icon/icon-email.svg";

export function Contact() {
  return (
    <section id="kontakt" className={styles.section + " " + styles.contactBox}>
      <h2>KONTAKT</h2>
      <div className={styles.contactColumns}>
        <div>
          <h3>MATEUSZ MOREK</h3>
          <address>
            <a className={styles.contactLink} href="tel:+48793937760">
              <IconPhone />
              +48 793 937 760
            </a>
            <a className={styles.contactLink} href="mailto:m.morek@tklm.pl">
              <IconEmail />
              m.morek@tklm.pl
            </a>
            <br />
          </address>
        </div>
        <div className={styles.openingHours}>
          <h3>GODZINY OTWARCIA</h3>
          <p>Poniedziałek - Piątek</p>
          <p>09:00 - 16:00</p>
        </div>
      </div>
    </section>
  );
}
