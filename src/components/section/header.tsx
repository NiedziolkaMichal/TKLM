import styles from "../../../styles/Home.module.css";
import Logo from "../../../public/logo.svg";
import { navigateToFragment } from "../../util/navigate";

export default function Header() {
  return (
    <section className={styles.header}>
      <a className={styles.headerLogo} href={""}>
        <Logo aria-label="TKLM" />
      </a>
      <nav className={styles.navBar}>
        <a className={styles.navBtn} href="#uslugi" onClick={navigateToFragment}>
          USŁUGI
        </a>
        <a className={styles.navBtn} href="#kontakt" onClick={navigateToFragment}>
          KONTAKT
        </a>
        <a className={styles.navBtn + " " + styles.navBtnSpecial} rel="noopener" href="https://get.teamviewer.com/6wgz2u4">
          ZDALNA POMOC
        </a>
      </nav>
    </section>
  );
}
