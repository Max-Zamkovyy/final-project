/* eslint-disable jsx-a11y/anchor-is-valid */
import Button from "../Button/Button";
import styles from "./Category.module.scss";

const Category = (props) => {
  const { img, name } = props;
  return (
    <div className={styles.category__item}>
      <img className={styles.Img} src={img} alt="" />
      <div className={styles.category__overlay}>
        <Button to="#" name={name} color="dark" />
      </div>
    </div>
  );
};

export default Category;
