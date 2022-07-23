import { useDispatch, useSelector } from "react-redux"

import { removeItem } from "./redux/actions/cart.actions"

const Cart = () => {

  const cartItems = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const removeFromCart = (id) => {
    return dispatch(removeItem(id));
  }

  const renderProducts = () => {
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {cartItems.map((p) => {
          return (
            <div style={{ margin: "10px" }}>
              <img src={p.images[0]} width={200} alt={p.title} />
              <p>{p.title}</p>
              <p>INR {p.price} </p>
              {/* <button onClick={() => addToCart(p)}>add to cart</button> */}
              <button onClick={() => removeFromCart(p.id)}>Remove</button>
            </div>
          );
        })}
      </div>
    );
  };

  return <div>{renderProducts()}</div>;
};

export default Cart;
