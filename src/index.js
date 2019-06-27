import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppProvider from "providers/AppProvider";
import Pages from "pages";
import * as serviceWorker from "./serviceWorker";

const root = document.getElementById("root");

ReactDOM.render((
  <AppProvider>
    <Pages />
  </AppProvider>
), root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
