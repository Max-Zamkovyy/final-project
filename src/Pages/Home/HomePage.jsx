import Banner from "../../Components/Banner/Banner";
import Category from "../../Components/Category/Category";
import Product from "../../Components/Product/Product";
import Button from "../../Components/Button/Button";
import Chapter from "../../Components/Chapter/Chapter";
import bannerImg from "../../Components/Banner/img/image-home-07.jpg";
import categoryImg1 from "../../Components/Category/img/banner-20.jpg";
import categoryImg2 from "../../Components/Category/img/banner-21.jpg";
import categoryImg3 from "../../Components/Category/img/banner-22.jpg";
import product1 from "../../Components/Product/img/product-01.jpg";
import product2 from "../../Components/Product/img/product-02.jpg";
import product3 from "../../Components/Product/img/product-03.jpg";
import product4 from "../../Components/Product/img/product-04.jpg";
import product5 from "../../Components/Product/img/product-05.jpg";
import product6 from "../../Components/Product/img/product-06.jpg";
import product7 from "../../Components/Product/img/product-07.jpg";
import product8 from "../../Components/Product/img/product-08.jpg";

const HomePage = () => {
  return (
    <div className="App">
      <main>
        <Banner
          imgBanner={bannerImg}
          bannerTitle="Waffle Hooded Coat"
          bannerBtn="Shop Now"
        />
        <section className="category">
          <div className="container">
            <Chapter name="This Season Collection" />
            <div className="category_grid">
              <Category img={categoryImg1} categoryName="Glasses" />
              <Category img={categoryImg2} categoryName="Sneakers" />
              <Category img={categoryImg3} categoryName="Handbags" />
            </div>
          </div>
        </section>

        <section className="products">
          <div className="container">
            <Chapter name="This Week's Highlights" />
            <div className="products_grid">
              <Product
                img={product1}
                productName="Hoodie with pocket"
                price="79"
              />
              <Product
                img={product2}
                productName="Flowers cotton dress"
                price="85"
              />
              <Product
                img={product3}
                productName="Hoodie with pocket"
                price="65"
              />
              <Product
                img={product4}
                productName="Oversize cotton sweatshirt"
                price="74"
              />
              <Product
                img={product5}
                productName="Striped cotton-blend sweatshirt"
                price="96"
              />
              <Product
                img={product6}
                productName="Hoodie with pocket"
                price="46"
              />
              <Product
                img={product7}
                productName="Flowers cotton dress"
                price="85"
              />
              <Product
                img={product8}
                productName="Hoodie with pocket"
                price="63"
              />
            </div>
            <Button bannerBtn="Shop Now" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
