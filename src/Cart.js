const Cart = ({ cartItems }) => {
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
            </div>
          );
        })}
      </div>
    );
  };

  return <div>{renderProducts()}</div>;
};

export default Cart;
