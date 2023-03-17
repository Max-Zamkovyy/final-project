import styles from "./Banner.module.scss";
import Button from "../Button/Button";

const Banner = (props) => {
  const { imgBanner, bannerTitle} = props;
  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.banner__wrapper}>
          <img src={imgBanner} alt="" />
          <div className={styles.banner__overlay}>
            <div>
              <h1 className={styles.banner__title}>{bannerTitle}</h1>
              <Button to="/" name="Shop Now" color="dark"></Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
