import styles from "../../../styles/util/floatingStars.module.css";

export function FloatingStars({ className }: { className?: string }) {
  return (
    <div className={styles.stars + (className ? " " + className : "")}>
      <div className={styles.medium}></div>
      <div className={styles.big}></div>
    </div>
  );
}
