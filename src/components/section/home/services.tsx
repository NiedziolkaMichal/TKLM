import styles from "../../../../styles/Home.module.css";
import { Document } from "@contentful/rich-text-types/dist/types/types";
import { renderRichTextParagraph } from "../../../cms/cmsUtil";
import { ServiceEntry } from "../../../pages";
import { ReactNode } from "react";

export default function Services({ heading, paragraph, services }: { heading: Document; paragraph: Document; services: ServiceEntry[] }) {
  return (
    <section id="uslugi" className={styles.section + " " + styles.sectionWhite}>
      {renderRichTextParagraph(heading, (children) => (
        <h2>{children}</h2>
      ))}
      {renderRichTextParagraph(paragraph)}
      <div className={styles.services}>{services.map(serviceAdapter)}</div>
    </section>
  );
}

function serviceAdapter(service: ServiceEntry) {
  const description = renderRichTextParagraph(service.fields.description, (children) => <p className={styles.serviceDescription}>{children}</p>);
  return <Service key={service.fields.heading} name={service.fields.heading} description={description} imgSrc={service.fields.backgroundUrl} />;
}

function Service({ name, description, imgSrc }: { name: string; description: ReactNode; imgSrcWebP?: string; imgSrc: string }) {
  return (
    <div className={styles.service}>
      <img className={styles.serviceBackground} src={imgSrc} alt="" />
      <div className={styles.serviceForeground}>
        <h3 hidden className={styles.serviceTitle}>
          {name.toUpperCase()}
        </h3>
        {description}
      </div>
    </div>
  );
}
