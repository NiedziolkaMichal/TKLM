import styles from "../../../styles/Home.module.css";

interface WaveProps {
  previousSectionClass?: string;
  nextSectionClass?: string;
  styleIndex?: 1 | 2 | 3 | 4;
}

export function Wave({ previousSectionClass, nextSectionClass, styleIndex }: WaveProps) {
  let styleClass = getWaveClass(styleIndex);

  if (nextSectionClass && previousSectionClass)
    return (
      <div className={previousSectionClass}>
        <div className={styles.wave + " " + styleClass + " " + nextSectionClass}></div>
      </div>
    );
  else if (nextSectionClass) return <div className={styles.wave + " " + styleClass + " " + nextSectionClass}></div>;
  else return <div className={styles.wave + " " + styleClass + " " + previousSectionClass}></div>;
}

function getWaveClass(index?: WaveProps["styleIndex"]) {
  switch (index || 1) {
    case 1:
      return styles.waveImage1;
    case 2:
      return styles.waveImage2;
    case 3:
      return styles.waveImage3;
    case 4:
      return styles.waveImage4;
  }
}
