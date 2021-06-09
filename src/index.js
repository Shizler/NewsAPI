import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import Header from "./components/Header.js";
import CssBaseline from "@material-ui/core/CssBaseline";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Header />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
