/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from "./Category.module.scss";

import classNames from "classnames";

const Category = (props) => {
  const { img, categoryName } = props;
  return (
    <div className={styles.category__item}>
      <img className={styles.Img} src={img} alt="" />
      <div className={styles.category__overlay}>
        <a href="#" className={classNames(styles.btn, styles.btn_dark)}>
          {categoryName}
        </a>
      </div>
    </div>
  );
};

export default Category;
