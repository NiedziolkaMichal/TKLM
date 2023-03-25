import styles from "../../../styles/section/footer.module.css";
import sectionStyles from "../../../styles/section/section.module.css";
import IconScrollUp from "/public/img/icon/icon-scroll-up.svg";
import { navigateToFragment } from "../../util/navigate";
import { renderRichTextParagraph } from "../../cms/cmsUtil";
import { Document } from "@contentful/rich-text-types/dist/types/types";

export function Footer({ content }: { content: Document }) {
  return (
    <footer className={sectionStyles.sectionFooterBackground + " " + styles.pageFooter}>
      <ScrollTop />
      {renderRichTextParagraph(content)}
    </footer>
  );
}

function ScrollTop() {
  return (
    <a href="#" className={styles.btnScrollTop} onClick={navigateToFragment} title="Przewiń do góry">
      <IconScrollUp width={32} height={32} />
    </a>
  );
}
