import styles from "../../../styles/util/floatingStars.module.css";

export function FloatingStars() {
  return (
    <div className={styles.stars}>
      <div className={styles.medium}></div>
      <div className={styles.big}></div>
    </div>
  );
}
