import styles from "../../../styles/Home.module.css";
import IconScrollUp from "/public/img/icon/icon-scroll-up.svg";
import { navigateToFragment } from "../../util/navigate";

export function Footer({}) {
  return (
    <footer className={styles.section + ' ' + styles.sectionFooterBackground + " " + styles.pageFooter}>
      <ScrollTop />
      <p>TKLM MATEUSZ MOREK</p>
      <p>ul. Profesora Michała Bobrzyńskiego, nr 43a, lok. 88, 30-348 Kraków</p>
      <p>NIP: 9442264628 REGON: 383707754</p>
    </footer>
  );
}

function ScrollTop({}) {
  return (
    <a href="#" className={styles.btnScrollTop} onClick={navigateToFragment} title="Scroll to Top">
      <IconScrollUp width={32} height={32} />
    </a>
  );
}
