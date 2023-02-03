import styles from "../../../../styles/Home.module.css";
import LogoWord from "/public/img/logo/logo-word.svg";
import LogoExcel from "/public/img/logo/logo-excel.svg";
import LogoPowerPoint from "/public/img/logo/logo-powerpoint.svg";
import LogoTeams from "/public/img/logo/logo-teams.svg";
import LogoSharePoint from "/public/img/logo/logo-sharepoint.svg";
import LogoAzureActiveDirectory from "/public/img/logo/logo-azure-active-directory.svg";

export function MicrosoftSupport() {
  return (
    <section className={styles.section + " " + styles.sectionYellow}>
      <h2>PEŁNE WSPARCIE DLA OPROGRAMOWANIA MICROSOFT</h2>
      <p>
        Specjalizujemy się w instalacji, konfiguracji i szkoleniem użytkowników z obsługi <b>Microsoft Word</b>, <b>Excel</b>, <b>PowerPoint</b>, <b>Teams</b>
      </p>
      <p>
        Tworzymy i utrzymujemy intranet dla firm w oparciu o <b>SharePoint Online</b>, a także zarządzamy <b>Azure Active Directory</b>.
      </p>
      <div className={styles.productLogoGroup}>
        <LogoWord className={styles.productLogo} role="presentation" />
        <LogoExcel className={styles.productLogo} role="presentation" />
        <LogoPowerPoint className={styles.productLogo} role="presentation" />
        <LogoTeams className={styles.productLogo} role="presentation" />
        <LogoSharePoint className={styles.productLogo} role="presentation" />
        <LogoAzureActiveDirectory className={styles.productLogo} role="presentation" />
      </div>
    </section>
  );
}
