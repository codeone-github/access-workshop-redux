import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import userReducer from "./reducers/user.reducer";
import cartReducer from "./reducers/cart.reducer"
import productsReducer from "./reducers/products.reducer";


const middlewares = [logger, thunk]

const store = createStore(
  combineReducers({
    user: userReducer,
    cart: cartReducer,
    products: productsReducer
  }),
  applyMiddleware(...middlewares)
);

export default store;