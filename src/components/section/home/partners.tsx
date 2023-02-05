import React, { useEffect, useState } from "react";
import styles from "../../../../styles/Home.module.css";
import { InfiniteMovingSlideShow } from "../../util/infiniteMovingSlideShow";
import { Document } from "@contentful/rich-text-types/dist/types/types";
import { LogoEntry, renderRichTextParagraph } from "../../../cms/cmsUtil";

export function Partners({ heading, paragraph, logos }: { heading: Document; paragraph: Document; logos: LogoEntry[] }) {
  const speed = useSlideShowSpeed();

  return (
    <section className={styles.section + " " + styles.sectionDark}>
      {renderRichTextParagraph(heading, (children) => (
        <h2>{children}</h2>
      ))}
      {renderRichTextParagraph(paragraph)}
      <InfiniteMovingSlideShow containerClass={styles.partnerGroup} speed={speed}>
        {logos.map((logo, i) => (
          <img key={i} src={logo.fields.url} className={styles.partner} alt={logo.fields.alt || ""} />
        ))}
      </InfiniteMovingSlideShow>
    </section>
  );
}

function useSlideShowSpeed() {
  const [speed, setSpeed] = useState(0);

  function calculateSlideShowSpeed() {
    return window.innerWidth < 1000 ? 0.7 : 0.3;
  }

  useEffect(() => {
    const callback = () => setSpeed(calculateSlideShowSpeed());
    addEventListener("resize", callback);
    callback();
    return () => removeEventListener("resize", callback);
  }, []);

  return speed;
}
