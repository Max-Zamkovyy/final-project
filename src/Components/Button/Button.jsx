import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

const Button = (props) => {
  const { name, to, color, } = props;

  const btnColor = color === "dark" ? styles.BtnDark : styles.BtnOutlinePrimary;
  return (
    <Link to={to} className={styles.Btn + " " + btnColor + " " + styles.Link}>
      {name}
    </Link>
  );
};

export default Button;
