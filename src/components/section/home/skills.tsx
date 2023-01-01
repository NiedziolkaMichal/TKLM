import styles from "../../../../styles/Home.module.css";
import { ReactNode } from "react";

export function Skills({}) {
  return (
    <section className={styles.section + " " + styles.sectionGrey}>
      <div className={styles.cardGroup}>
        <Card paragraph="Pracujemy w językach: polskim, angielskim i niemieckim.">
          <video className={styles.cardImage} width={275} height={152} autoPlay={true} loop={true} muted={true} playsInline={true}>
            <source src="/img/cards/icon-laptop-meeting.mp4" type="video/mp4" />
          </video>
        </Card>
        <Card paragraph="Posiadamy wymagane przez prawo uprawnienia w zakresie prac z urządzeniami elektrycznymi do 1kV.">
          <video className={styles.cardImage} width={240} height={152} autoPlay={true} loop={true} muted={true} playsInline={true}>
            <source src="/img/cards/icon-writing-code.mp4" type="video/mp4" />
          </video>
        </Card>
        <Card paragraph="Gwarantujemy pełną poufność i najwyższe standardy wsparcia informatycznego, dedykowanego pod zgłaszane potrzeby.">
          <video className={styles.cardImage} width={351} height={152} autoPlay={true} loop={true} muted={true} playsInline={true}>
            <source src="/img/cards/icon-explaining.mp4" type="video/mp4" />
          </video>
        </Card>
      </div>
    </section>
  );
}

function Card({ paragraph, children }: { paragraph: string; children: ReactNode }) {
  return (
    <div className={styles.card}>
      {children}
      <p>{paragraph}</p>
    </div>
  );
}
