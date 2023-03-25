import styles from "../../styles/section/section.module.css";
import Hero from "../components/section/home/hero";
import Header, { getHeaderEntry, HeaderEntry } from "../components/section/header";
import Services from "../components/section/home/services";
import { MicrosoftSupport } from "../components/section/home/microsoftSupport";
import { Skills } from "../components/section/home/skills";
import { Partners } from "../components/section/home/partners";
import { Map } from "../components/util/googleMap";
import { Wave } from "../components/util/sectionWave";
import { Contact } from "../components/section/home/contact";
import { Footer } from "../components/section/footer";
import { PageMeta } from "../components/metaTags";
import { GetStaticProps } from "next";
import { getCMSEntry } from "../cms/cmsData";
import { Document } from "@contentful/rich-text-types/dist/types/types";
import { LogoEntry } from "../cms/cmsUtil";

export interface IndexProps {
  cmsData: IndexEntry;
  headerEntry: HeaderEntry;
}

interface IndexEntry {
  fields: {
    title: string;
    metaDescription: string;
    heroHeading: Document;
    heroParagraph: Document;
    servicesHeading: Document;
    servicesParagraph: Document;
    services: ServiceEntry[];
    microsoftSupportHeading: Document;
    microsoftSupportParagraph: Document;
    microsoftSupportProducts: LogoEntry[];
    skills: SkillEntry[];
    partnersHeading: Document;
    partnersParagraph: Document;
    partnerLogos: LogoEntry[];
    contactName: string;
    contactNumber: string;
    contactEmail: string;
    openingHours: string;
    mapPinTitle: string;
    footer: Document;
  };
}

export interface ServiceEntry {
  fields: {
    heading: string;
    description: Document;
    backgroundUrl: string;
  };
}

export interface SkillEntry {
  fields: {
    paragraph: Document;
    mp4Url: string;
    mp4width: number;
    mp4height: number;
  };
}

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const cmsData = (await getCMSEntry(process.env.CONTENTFUL_INDEX_ENTRY_ID)) as IndexEntry;
  const headerEntry = await getHeaderEntry();
  return {
    props: {
      cmsData,
      headerEntry,
    },
  };
};

export default function Home({ cmsData, headerEntry }: IndexProps) {
  const fields = cmsData.fields;
  return (
    <>
      <PageMeta title={fields.title} description={fields.metaDescription} />
      <Header cmsEntry={headerEntry} />
      <main className={styles.main}>
        <Hero heading={fields.heroHeading} paragraph={fields.heroParagraph} />
        <Wave previousSectionClass={styles.sectionDarkPixels} nextSectionClass={styles.sectionWhite} styleIndex={1} />

        <Services heading={fields.servicesHeading} paragraph={fields.servicesParagraph} services={fields.services} />
        <Wave previousSectionClass={styles.sectionWhite} nextSectionClass={styles.sectionYellow} styleIndex={1} />

        <MicrosoftSupport heading={fields.microsoftSupportHeading} paragraph={fields.microsoftSupportParagraph} products={fields.microsoftSupportProducts} />
        <Wave previousSectionClass={styles.sectionYellow} nextSectionClass={styles.sectionGrey} styleIndex={2} />

        <Skills skills={fields.skills} />
        <Wave previousSectionClass={styles.sectionGrey} nextSectionClass={styles.sectionDark} styleIndex={2} />

        <Partners heading={fields.partnersHeading} paragraph={fields.partnersParagraph} logos={fields.partnerLogos} />
        <Wave previousSectionClass={styles.sectionDark} nextSectionClass="" styleIndex={3} />

        <section className={styles.section + " " + styles.mapSection}>
          <Map pinTitle={fields.mapPinTitle} />
          <Contact name={fields.contactName} phoneNumber={fields.contactNumber} email={fields.contactEmail} openingHours={fields.openingHours} />
        </section>
        <Wave previousSectionClass="" nextSectionClass={styles.sectionFooterBackground} styleIndex={4} />

        <Footer content={fields.footer} />
      </main>
    </>
  );
}
