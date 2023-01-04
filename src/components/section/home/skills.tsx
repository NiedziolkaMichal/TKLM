import styles from "../../../../styles/Home.module.css";
import { ReactNode } from "react";

export function Skills({}) {
  return (
    <section className={styles.section + " " + styles.sectionGrey}>
      <div className={styles.cardGroup}>
        <Card paragraph="Pracujemy w językach: polskim, angielskim i niemieckim.">
          <Mp4GIF src="/img/cards/icon-laptop-meeting.mp4" width={275} height={152} className={styles.cardImage} />
        </Card>
        <Card paragraph="Posiadamy wymagane przez prawo uprawnienia w zakresie prac z urządzeniami elektrycznymi do 1kV.">
          <Mp4GIF src="/img/cards/icon-writing-code.mp4" width={240} height={152} className={styles.cardImage} />
        </Card>
        <Card paragraph="Gwarantujemy pełną poufność i najwyższe standardy wsparcia informatycznego, dedykowanego pod zgłaszane potrzeby.">
          <Mp4GIF src="/img/cards/icon-explaining.mp4" width={351} height={152} className={styles.cardImage} />
        </Card>
      </div>
    </section>
  );
}

function Mp4GIF({ src, width, height, className }: { src: string; width: number; height: number; className?: string }) {
  return (
    <video className={className} width={width} height={height} autoPlay={true} loop={true} muted={true} playsInline={true} tabIndex={-1}>
      <source src={src} type="video/mp4" />
    </video>
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
