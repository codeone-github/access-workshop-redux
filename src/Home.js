import { useEffect } from "react";
import { ClipLoader } from "react-spinners";

import { useDispatch, useSelector } from "react-redux"

import { addItem } from "./redux/actions/cart.actions"
import styles from "./homestyles.module.css";
import { getProducts } from "./redux/actions/products.actions";

const Home = () => {
  const { items:products, loading, error  } = useSelector(state => state.products)
  const dispatch = useDispatch();

  useEffect(() => dispatch(getProducts()) , [])

  const addToCart = (product) => {
    dispatch(addItem(product))
  };

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
