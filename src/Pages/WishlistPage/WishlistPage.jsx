import Wishlist from "../../Components/Wishlist/Wishlist";
import styles from "./WishlistPage.module.scss";

const WishlistPage = () => {
  return (
    <div>
      <h2 className={styles.wishlist__title}>Wishlist</h2>
      <Wishlist />
    </div>
  );
};

export default WishlistPage;
