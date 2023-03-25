import styles from "../../../../styles/section/home/skills.module.css";
import sectionStyles from "../../../../styles/section/section.module.css";
import { ReactNode } from "react";
import { SkillEntry } from "../../../pages";
import { renderRichTextParagraph } from "../../../cms/cmsUtil";

export function Skills({ skills }: { skills: SkillEntry[] }) {
  return (
    <section className={sectionStyles.section + " " + sectionStyles.sectionGrey}>
      <div className={styles.cardGroup}>
        {skills.map((s, i) => (
          <Card key={i} paragraph={renderRichTextParagraph(s.fields.paragraph)}>
            <Mp4GIF src={s.fields.mp4Url} width={s.fields.mp4width} height={s.fields.mp4height} className={styles.cardImage} />
          </Card>
        ))}
      </div>
    </section>
  );
}

function Mp4GIF({ src, width, height, className }: { src: string; width: number; height: number; className?: string }) {
  return (
    <video className={className} width={width} height={height} autoPlay={true} loop={true} muted={true} playsInline={true} tabIndex={-1} role="presentation">
      <source src={src} type="video/mp4" />
    </video>
  );
}

function Card({ paragraph, children }: { paragraph: ReactNode; children: ReactNode }) {
  return (
    <div className={styles.card}>
      {children}
      {paragraph}
    </div>
  );
}
