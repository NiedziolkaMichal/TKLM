import styles from "../../../../styles/Home.module.css";
import { FloatingStars } from "../../util/floatingStars";
import Head from "next/head";

export default function Hero() {
  return (
    <>
      <Head>
        <link rel="preload" href="/img/hero-background-dark.jpg" as="image" />
      </Head>
      <section className={styles.section + " " + styles.heroSection + " " + styles.sectionDarkPixels}>
        <FloatingStars />
        <h1 className={styles.heroHeading}>
          KOMPLEKSOWE
          <br />
          <b className={styles.heroFancyText}>WSPARCIE</b>
          <br />
          INFORMATYCZNE
        </h1>
        <p className={styles.heroP}>
          Oferujemy pełne wsparcie informatyczne dla firm w zakresie: <b>sieci</b>, <b>komputerów</b> i <b>oprogramowania</b>.
        </p>
      </section>
    </>
  );
}
