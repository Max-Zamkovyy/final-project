import Banner from "../../Components/Banner/Banner";
import Category from "../../Components/Category/Category";
import Products from "../../Components/Product/ProductList";
import Button from "../../Components/Button/Button";
import Chapter from "../../Components/Chapter/Chapter";
import bannerImg from "../../Components/Banner/img/image-home-07.jpg";
import categoryImg1 from "../../Components/Category/img/banner-20.jpg";
import categoryImg2 from "../../Components/Category/img/banner-21.jpg";
import categoryImg3 from "../../Components/Category/img/banner-22.jpg";

const HomePage = () => {
  return (
    <div className="App">
      <main>
        <Banner
          imgBanner={bannerImg}
          bannerTitle="Waffle Hooded Coat"
          
        />
        <section className="category">
          <div className="container">
            <Chapter name="This Season Collection" />
            <div className="category_grid">
              <Category img={categoryImg1} name="Glasses" />
              <Category img={categoryImg2} name="Sneakers" />
              <Category img={categoryImg3} name="Handbags" />
            </div>
          </div>
        </section>

        <Products />
        <div>
        <Button to="/" name="Shop Now" color="white"></Button>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
