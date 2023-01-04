import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Hero from "../components/section/home/hero";
import Header from "../components/section/header";
import Services from "../components/section/home/services";
import { MicrosoftSupport } from "../components/section/home/microsoftSupport";
import { Skills } from "../components/section/home/skills";
import { Partners } from "../components/section/home/partners";
import { Map } from "../components/util/googleMap";
import { Wave } from "../components/util/sectionWave";
import { Contact } from "../components/section/home/contact";
import { Footer } from "../components/section/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>TKLM - Kompleksowe wsparcie informatyczne</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <Hero />
        <Wave previousSectionClass={styles.sectionDarkPixels} nextSectionClass={styles.sectionWhite} styleIndex={1} />
        <Services />
        <Wave previousSectionClass={styles.sectionWhite} nextSectionClass={styles.sectionYellow} styleIndex={1} />
        <MicrosoftSupport />
        <Wave previousSectionClass={styles.sectionYellow} nextSectionClass={styles.sectionGrey} styleIndex={2} />
        <Skills />
        <Wave previousSectionClass={styles.sectionGrey} nextSectionClass={styles.sectionDark} styleIndex={2} />
        <Partners />
        <Wave previousSectionClass={styles.sectionDark} nextSectionClass="" styleIndex={3} />
        <section className={styles.section + " " + styles.mapSection}>
          <Map />
          <Contact />
        </section>
        <Wave previousSectionClass="" nextSectionClass={styles.sectionFooterBackground} styleIndex={4} />
        <Footer />
      </main>
    </>
  );
}
