import styles from "../../../../styles/section/home/hero.module.css";
import sectionStyles from "../../../../styles/section/section.module.css";
import { FloatingStars } from "../../util/floatingStars";
import Head from "next/head";
import { Document } from "@contentful/rich-text-types/dist/types/types";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { renderRichText, renderRichTextParagraph } from "../../../cms/cmsUtil";
import { ReactNode } from "react";

export default function Hero({ heading, paragraph }: { heading: Document; paragraph: Document }) {
  return (
    <>
      <Head>
        <link rel="preload" href="/img/hero-background-dark.jpg" as="image" />
      </Head>
      <section className={sectionStyles.section + " " + styles.heroSection + " " + sectionStyles.sectionDarkPixels}>
        <FloatingStars />
        {heroHeading(heading)}
        {renderRichTextParagraph(paragraph, (children) => (
          <p className={styles.heroP}>{children}</p>
        ))}
      </section>
    </>
  );
}

function heroHeading(content: Document): ReactNode {
  return renderRichText(content, {
    renderMark: {
      [MARKS.BOLD]: (text) => <b className={styles.heroFancyText}>{text}</b>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <h1 className={styles.heroHeading}>{children}</h1>,
    },
  });
}
