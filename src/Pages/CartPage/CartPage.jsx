import Cart from "../../Components/Cart/Cart";
import styles from "../CartPage/CartPage.module.scss";

const CartPage = () => {
  return (
    <div className={styles.container}>
    <h1 className={styles.cart__title}>Shopping Cart</h1>
      <Cart />
    </div>
  );
};

export default CartPage;
