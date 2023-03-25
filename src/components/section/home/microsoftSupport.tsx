import styles from "../../../../styles/section/home/microsoftSupport.module.css";
import sectionStyles from "../../../../styles/section/section.module.css";
import { Document } from "@contentful/rich-text-types/dist/types/types";
import { LogoEntry, renderRichTextParagraph } from "../../../cms/cmsUtil";

export function MicrosoftSupport({ heading, paragraph, products }: { heading: Document; paragraph: Document; products: LogoEntry[] }) {
  return (
    <section className={sectionStyles.section + " " + sectionStyles.sectionYellow}>
      {renderRichTextParagraph(heading, (children) => (
        <h2>{children}</h2>
      ))}
      {renderRichTextParagraph(paragraph)}
      <div className={styles.productLogoGroup}>
        {products.map((logo, i) => (
          <img key={i} src={logo.fields.url} className={styles.productLogo} alt={logo.fields.alt || ""} />
        ))}
      </div>
    </section>
  );
}
