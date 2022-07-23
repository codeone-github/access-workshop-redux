import { useState } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import "./styles.css";
import Home from "./Home";
import Login from "./Login";
import Cart from "./Cart";

import Header from "./Header";

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  console.log(cartItems);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Login} exact />
        <Route
          path="/home"
          component={(props) => (
            <Home
              {...props}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          )}
        />
        <Route
          path="/cart"
          component={(props) => <Cart {...props} cartItems={cartItems} />}
        />
      </Switch>
    </BrowserRouter>
  );
}

// "/"  -> Login
// "/home" -> Home
// <Route path="/home" component={Home} />

/**
 *  1. Improvise cart
 *      - Add a remove from cart button
 *      - Show total amount
 *      - Avoid duplicate
 *
 *  2. Products page
 *      - If the item is already added to the cart, then don't show addto cart button
 *      - Add a price filter
 *      - Add a search bar
 *
 * 3. Header
 *     - If user is logged in, show their email id at right side
 *  ----------
 *
 * React Learning
 * 1. COntext API
 * 2. Private / Protected routes
 *
 */
