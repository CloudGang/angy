import LogRocket from 'logrocket';
//import setupLogRocketReact from 'logrocket-react';
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const rootElement = document.getElementById("root");
LogRocket.init('lbzpyi/angynails');
//setupLogRocketReact(LogRocket);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
