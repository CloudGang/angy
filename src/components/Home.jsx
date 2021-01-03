import React from "react";
import { useHistory } from "react-router-dom";
import cloudgang from './data/cloudgang.png'

function Home() {
  const history = useHistory();
  const routeToShop = event => {
    setTimeout(() => {
      history.push("/item-list");
    }, 400);
  };

  return (
    <div className="home-wrapper">
      <img
        className="home-image"
        src={cloudgang}
        alt="Angy Nails"
      />
      <button
        onClick={routeToShop}
        className="md-button shop-button"
      >
        &#128133;
        View
      </button>
    </div>
  );
}

export default Home;
