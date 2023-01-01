import React from "react";
import styles from "../../../../styles/Home.module.css";
import { InfiniteMovingSlideShow } from "../../util/infiniteMovingSlideShow";
import LogoAsus from "/public/img/logo/logo-asus.svg";
import LogoCisco from "/public/img/logo/logo-cisco.svg";
import LogoDell from "/public/img/logo/logo-dell.svg";
import LogoMicrosoft from "/public/img/logo/logo-microsoft.svg";
import LogoEset from "/public/img/logo/logo-eset.svg";
import LogoLinux from "/public/img/logo/logo-linux.svg";
import LogoAmazon from "/public/img/logo/logo-amazon.svg";
import LogoApple from "/public/img/logo/logo-apple.svg";
import LogoBrother from "/public/img/logo/logo-brother.svg";
import LogoCanon from "/public/img/logo/logo-canon.svg";
import LogoComarch from "/public/img/logo/logo-comarch.svg";
import LogoFujitsu from "/public/img/logo/logo-fujitsu.svg";
import LogoHp from "/public/img/logo/logo-hp.svg";
import LogoNetia from "/public/img/logo/logo-netia.svg";
import LogoSamsung from "/public/img/logo/logo-samsung.svg";
import LogoTeamViewer from "/public/img/logo/logo-team-viewer.svg";

export function Partners({}) {
  return (
    <section className={styles.section + " " + styles.sectionDark}>
      <h2>NASI PARTNERZY</h2>
      <InfiniteMovingSlideShow containerClass={styles.partnerGroup}>
        <LogoAsus className={styles.partner} alt="ASUS" />
        <LogoCisco className={styles.partner} alt="Cisco" />
        <LogoDell className={styles.partner} alt="Dell" />
        <LogoMicrosoft className={styles.partner} alt="Microsoft" />
        <LogoEset className={styles.partner} alt="ESET" />
        <LogoLinux className={styles.partner} alt="Linux" />
        <LogoAmazon className={styles.partner} alt="Amazon" />
        <LogoApple className={styles.partner} alt="Apple" />
        <LogoBrother className={styles.partner} alt="Brother" />
        <LogoCanon className={styles.partner} alt="Canon" />
        <LogoComarch className={styles.partner} alt="Comarch" />
        <LogoFujitsu className={styles.partner} alt="Fujitsu" />
        <LogoHp className={styles.partner} alt="HP" />
        <LogoNetia className={styles.partner} alt="Netia" />
        <LogoSamsung className={styles.partner} alt="Samsung" />
        <LogoTeamViewer className={styles.partner} alt="TeamViewer" />
      </InfiniteMovingSlideShow>
    </section>
  );
}
