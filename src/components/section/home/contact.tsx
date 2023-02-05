import styles from "../../../../styles/Home.module.css";
import IconPhone from "/public/img/icon/icon-phone.svg";
import IconEmail from "/public/img/icon/icon-email.svg";

export function Contact({ name, phoneNumber, email, openingHours }: { name: string; phoneNumber: string; email: string; openingHours: string }) {
  return (
    <section id="kontakt" className={styles.section + " " + styles.contactBox}>
      <h2>KONTAKT</h2>
      <div className={styles.contactColumns}>
        <div>
          <h3>{name}</h3>
          <address>
            <a className={styles.contactLink} href={`tel:${phoneNumber.replaceAll(" ", "")}`}>
              <IconPhone />
              {phoneNumber}
            </a>
            <a className={styles.contactLink} href={`mailto:${email}`}>
              <IconEmail />
              {email}
            </a>
            <br />
          </address>
        </div>
        <div className={styles.openingHours}>
          <h3>GODZINY OTWARCIA</h3>
          <p>Poniedziałek - Piątek</p>
          <p>{openingHours}</p>
        </div>
      </div>
    </section>
  );
}
