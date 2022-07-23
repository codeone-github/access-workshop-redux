import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";

import styles from "./homestyles.module.css";

// [GET] https://api.escuelajs.co/api/v1/products

const Home = ({ cartItems, setCartItems }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, []);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // console.log("cartitems ---->", cartItems);

  const renderProducts = () => {
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((p) => {
          return (
            <div style={{ margin: "10px" }}>
              <img src={p.images[0]} width={200} alt={p.title} />
              <p>{p.title}</p>
              <p>INR {p.price} </p>
              <button onClick={() => addToCart(p)}>add to cart</button>
            </div>
          );
        })}
      </div>
    );
  };

  if (loading) {
    return (
      <div className={styles.loaderWrapper}>
        <ClipLoader />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h2>Something went wrong!</h2>
        <p>Please refresh the page!</p>
      </div>
    );
  }

  return (
    <>
      <h2>Our products</h2>
      {renderProducts()}
    </>
  );
};

export default Home;
