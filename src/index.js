import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//router
import { BrowserRouter as Router } from "react-router-dom";
import { history } from "./helpers/history";

//redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
//thunk
import thunk from "redux-thunk";
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
