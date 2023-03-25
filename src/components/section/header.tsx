import styles from "../../../styles/section/header.module.css";
import Logo from "../../../public/logo.svg";
import { navigateToFragment } from "../../util/navigate";
import { getCMSEntry } from "../../cms/cmsData";

export interface HeaderEntry {
  fields: {
    teamViewerUrl: string;
  };
}

export async function getHeaderEntry() {
  return (await getCMSEntry(process.env.CONTENTFUL_HEADER_ENTRY_ID)) as HeaderEntry;
}

export default function Header({ cmsEntry }: { cmsEntry: HeaderEntry }) {
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
        <a className={styles.navBtn + " " + styles.navBtnSpecial} rel="noopener" href={cmsEntry.fields.teamViewerUrl}>
          ZDALNA POMOC
        </a>
      </nav>
    </section>
  );
}
