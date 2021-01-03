import React, { useState } from "react";
import "./styles.css";
import Home from "./components/Home";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch, useHistory } from "react-router-dom";
import ItemsList from "./components/ItemsList";
import data from "./data";
import Item from "./components/Item";

export default function App() {
  const [product] = useState(data);
  const history = useHistory();
  const routeToShop = event => {
    setTimeout(() => {
      history.push("/item-list");
    }, 400);
  };

  return (
    <div className="App">
      <nav>
        <h1 className="store-header">ANGY NAILS</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <font color="white">¤</font>
          <Link to="/item-list"> Gallery</Link>
          <font color="white">¤</font>
          
    <a
      href="javascript:void(
        window.open(
          'https://form.jotform.com/210020197444142',
          'blank',
          'scrollbars=yes,
          toolbar=no,
          width=700,
          height=500'
        )
      )
    ">
      Book Appointment
    </a>
        </div>
      </nav>

      <Switch>
        <Route path="/item-list/:itemID">
          <Item items={product} />
        </Route>
        <Route path="/item-list">
          <ItemsList items={product} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
