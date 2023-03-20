import Product from "./Product";
import styles from "./ProductList.module.scss";
import product1 from "../../Components/Product/img/product-01.jpg";
import product2 from "../../Components/Product/img/product-02.jpg";
import product3 from "../../Components/Product/img/product-03.jpg";
import product4 from "../../Components/Product/img/product-04.jpg";
import product5 from "../../Components/Product/img/product-05.jpg";
import product6 from "../../Components/Product/img/product-06.jpg";
import product7 from "../../Components/Product/img/product-07.jpg";
import product8 from "../../Components/Product/img/product-08.jpg";

const Products = () => {
  const productsList = [
    {
      name: "Hoodie with pocket",
      img: product1,
      alt: "Hoodie with pocket",
      price: "50$",
    },
    {
      name: "Flowers cotton dress",
      img: product2,
      alt: "Flowers cotton dress",
      price: "45$",
    },
    {
      name: "Hoodie with pocket",
      img: product3,
      alt: "Hoodie with pocket",
      price: "60$",
    },
    {
      name: "Oversize cotton sweatshirt",
      img: product4,
      alt: "Oversize cotton sweatshirt",
      price: "12$",
    },
    {
      name: "Striped cotton-blend sweatshirt",
      img: product5,
      alt: "Striped cotton-blend sweatshirt",
      price: "12$",
    },
    {
      name: "Hoodie with pocket",
      img: product6,
      alt: "Hoodie with pocket",
      price: "80$",
    },
    {
      name: "Flowers cotton dress",
      img: product7,
      alt: "Flowers cotton dress",
      price: "66$",
    },
    {
      name: "Hoodie with pocket",
      img: product8,
      alt: "Hoodie with pocket",
      price: "32$",
    },
  ];

  return (
    <section className={styles.products}>
      <div className={styles.container}>
        <h2 className={styles.products_title}>This Week's Highlights</h2>
        <div className={styles.products_grid}>
          {productsList.map((product, i) => {
            return (
              <Product
                id={i}
                key={i}
                productName={product.name}
                img={product.img}
                price={product.price}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
