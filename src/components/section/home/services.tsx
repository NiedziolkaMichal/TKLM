import styles from "../../../../styles/Home.module.css";
import Image from "next/image";

export default function Services({}) {
  return (
    <section id="uslugi" className={styles.section + " " + styles.sectionWhite}>
      <h2>SZEROKI ZAKRES USŁUG</h2>
      <p>Specjalizujemy się w obsłudze i znamy informatyczną stronę działania: firm produkcyjnych, biur rachunkowych, biur nieruchomości, spółdzielni mieszkaniowych, organizacji pozarządowych i kancelarii prawnych.</p>
      <div className={styles.services}>
        <Service name="Sieci Komputerowe" description="Specjalizujemy się w projektowaniu, budowie i administracji sieci komputerowych. Budujemy rozwiązania sieciowe w oparciu o infrastrukturę kablową, światłowodową i bezprzewodową." imgSrc="/img/services/network.jpg" />
        <Service name="Wsparcie" description="Pomagamy w przygotowaniu stanowisk do pracy zdalnej. Świadczymy pełne wsparcie dla komputerów i serwerów opartych na systemach: Windows, Linux i MacOs." imgSrc="/img/services/support.jpg" />
        <Service name="Sprzęt" description="Dostarczamy sprzęt komputerowy i oprogramowanie. Dostarczamy i montujemy urządzenia sieciowe: kamery, alarmy, drukarki, serwery danych i inne." imgSrc="/img/services/hardware.jpg" />
        <Service name="Oprogramowanie" description="Przeprowadzamy kompleksową instalację oprogramowania komputerowego, w tym programów biurowych, księgowych oraz zabezpieczamy sieci i komputery – zapewniając ich utrzymanie i aktualizację." imgSrc="/img/services/software.jpg" />
        <Service name="Monitoring" description="Dostarczamy i montujemy urządzenia sieciowe: kamery, alarmy, drukarki, serwery danych i inne." imgSrc="/img/services/surveillance.jpg" />
        <Service name="Bezpieczeństwo" description="Przeprowadzamy audyt bezpieczeństwa i potrzeb informatycznych organizacji. W sposób bezpieczny i poufny zabezpieczamy dane." imgSrc="/img/services/security.jpg" />
      </div>
    </section>
  );
}

function Service({ name, description, imgSrc }: { name: string; description: string; imgSrc: string }) {
  return (
    <button className={styles.service}>
      <Image className={styles.serviceBackground} src={imgSrc} alt="" fill={true} />
      <div className={styles.serviceForeground}>
        <h3 hidden className={styles.serviceTitle}>
          {name.toUpperCase()}
        </h3>
        <p className={styles.serviceDescription}>{description}</p>
      </div>
    </button>
  );
}
