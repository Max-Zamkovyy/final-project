import { useContext } from "react";
import { WishlistContext } from "../../App";
import Wishlist from "../../Components/Wishlist/Wishlist";
import styles from "./WishlistPage.module.scss";

const WishlistPage = () => {
  const { productWishlist } = useContext(WishlistContext);

  return (
    <div>
      <h2 className={styles.wishlist__title}>Wishlist</h2>
      {productWishlist.map((props) => (
        <Wishlist props={props} />
      ))}
    </div>
  );
};

export default WishlistPage;
