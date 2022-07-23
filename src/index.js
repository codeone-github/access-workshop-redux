import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";

import App from "./App";
import store from "./redux/store"

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);


/*
 * 1. redux - external dependency consists of only redux utils
 * 2. react-redux -  utility functions to connect our react app to the redux store
 * 3. redux-thunk - async actions in store
 * 4. redux-persist - persist store state
 */