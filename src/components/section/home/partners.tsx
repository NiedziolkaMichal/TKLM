import React, { useEffect, useState } from "react";
import styles from "../../../../styles/Home.module.css";
import { InfiniteMovingSlideShow } from "../../util/infiniteMovingSlideShow";
import LogoAsus from "/public/img/logo/logo-asus.svg";
import LogoCisco from "/public/img/logo/logo-cisco.svg";
import LogoDell from "/public/img/logo/logo-dell.svg";
import LogoMicrosoft from "/public/img/logo/logo-microsoft.svg";
import LogoEset from "/public/img/logo/logo-eset.svg";
import LogoLinux from "/public/img/logo/logo-linux.svg";
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
  const speed = useSlideShowSpeed();
  
  return (
    <section className={styles.section + " " + styles.sectionDark}>
      <h2>NASI PARTNERZY</h2>
      <InfiniteMovingSlideShow containerClass={styles.partnerGroup} speed={speed}>
        <LogoAsus className={styles.partner} aria-label="ASUS" />
        <LogoCisco className={styles.partner} aria-label="Cisco" />
        <LogoDell className={styles.partner} aria-label="Dell" />
        <LogoMicrosoft className={styles.partner} aria-label="Microsoft" />
        <LogoEset className={styles.partner} aria-label="ESET" />
        <LogoLinux className={styles.partner} aria-label="Linux" />
        <LogoApple className={styles.partner} aria-label="Apple" />
        <LogoBrother className={styles.partner} aria-label="Brother" />
        <LogoCanon className={styles.partner} aria-label="Canon" />
        <LogoComarch className={styles.partner} aria-label="Comarch" />
        <LogoFujitsu className={styles.partner} aria-label="Fujitsu" />
        <LogoHp className={styles.partner} aria-label="HP" />
        <LogoNetia className={styles.partner} aria-label="Netia" />
        <LogoSamsung className={styles.partner} aria-label="Samsung" />
        <LogoTeamViewer className={styles.partner} aria-label="TeamViewer" />
      </InfiniteMovingSlideShow>
    </section>
  );
}

function useSlideShowSpeed() {
  const [speed, setSpeed] = useState(0);

  function calculateSlideShowSpeed() {
    return window.innerWidth < 1000 ? 0.7 : 0.3
  }

  useEffect(() => {
    const callback = () => setSpeed(calculateSlideShowSpeed());
    addEventListener('resize', callback);
    callback();
    return () => removeEventListener('resize', callback)
  }, [])
  
  return speed;
}
