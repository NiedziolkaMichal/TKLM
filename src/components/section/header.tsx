import styles from "../../../styles/section/header.module.css";
import Logo from "../../../public/logo.svg";
import { navigateToFragment } from "../../util/navigate";
import { getCMSEntry } from "../../cms/cmsData";
import { useEffect, useState } from "react";
import { FloatingStars } from "../util/floatingStars";
import { getRemInPx } from "../../util/common";

export interface HeaderEntry {
  fields: {
    teamViewerUrl: string;
  };
}

export async function getHeaderEntry() {
  return (await getCMSEntry(process.env.CONTENTFUL_HEADER_ENTRY_ID)) as HeaderEntry;
}

export default function Header({ cmsEntry }: { cmsEntry: HeaderEntry }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  useHideMobileNavOnLinkClick(mobileNavOpen, setMobileNavOpen);
  useHideMobileNavOnResize(mobileNavOpen, setMobileNavOpen);

  return (
    <>
      <section className={styles.header + (mobileNavOpen ? " " + styles.headerMobile : "")}>
        <FloatingStars className={mobileNavOpen ? "" : styles.hidden} />
        <a className={styles.headerLogo + (mobileNavOpen ? " " + styles.headerLogoMobile : "")} href={""}>
          <Logo aria-label="TKLM" />
        </a>
        <nav className={styles.navBar + (mobileNavOpen ? " " + styles.navBarMobile : "")}>
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

      <button className={styles.mobileNavBtn} onClick={() => onMobileNavBtnClick(mobileNavOpen, setMobileNavOpen, true)}>
        <span className={styles.mobileNavBtnBar}></span>
        <span className={styles.mobileNavBtnBar}></span>
        <span className={styles.mobileNavBtnBar}></span>
      </button>
    </>
  );
}

function onMobileNavBtnClick(mobileNavOpen: boolean, setMobileNavOpen: (open: boolean) => void, scrollToTop?: boolean, forceClose?: boolean) {
  if (scrollToTop) {
    window.scroll({
      top: 0,
    });
  }

  if (mobileNavOpen || forceClose) {
    onHideMobileNav();
    setMobileNavOpen(false);
  } else {
    onShowMobileNav();
    setMobileNavOpen(true);
  }
}

function onShowMobileNav() {
  document.documentElement.style.overflow = "hidden";
}

function onHideMobileNav() {
  document.documentElement.style.overflow = "visible";
}

function useHideMobileNavOnLinkClick(mobileNavOpen: boolean, setMobileNavOpen: (open: boolean) => void) {
  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (e.target instanceof HTMLAnchorElement) {
        onMobileNavBtnClick(mobileNavOpen, setMobileNavOpen, false, true);
      }
    };
    document.documentElement.addEventListener("click", listener);
    return () => document.documentElement.removeEventListener("click", listener);
  });
}

function useHideMobileNavOnResize(mobileNavOpen: boolean, setMobileNavOpen: (open: boolean) => void) {
  useEffect(() => {
    const listener = () => {
      if (mobileNavOpen && window.innerWidth >= 29 * getRemInPx() + 86) {
        onMobileNavBtnClick(mobileNavOpen, setMobileNavOpen, false, true);
      }
    };
    addEventListener("resize", listener);
    return () => removeEventListener("resize", listener);
  }, [mobileNavOpen, setMobileNavOpen]);
}
