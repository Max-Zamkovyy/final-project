import styles from "./Chapter.module.scss";

const Chapter = (name) => {
  return <h2 className={styles.category__title}>{name}</h2>;
};

export default Chapter;
