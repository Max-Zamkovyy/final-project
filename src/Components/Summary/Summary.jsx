import Button from "../Button/Button";
import styles from "../Summary/Summary.module.scss";

const Summary = () => {
  return (
    <div className={styles.summary}>
      <h4 className={styles.summary__title}>Summary</h4>

      <div className={styles.summary__body}>
        <div className={styles.summary__line}>
          <div>Total</div>
          <div>$2020.00</div>
        </div>
      </div>
      <Button name="Check Out" color="dark" />
    </div>
  );
};

export default Summary;
