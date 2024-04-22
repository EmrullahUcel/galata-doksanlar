import React from "react";
import "../../App.css";
import Header from "../Header";
import Footer from "../Footer";
import Card from "../Card/Card";

const Menu = () => {

  return (
    <div className="app-container">
      <div className="app">
        <Header />
        <div className="cards">
          <Card />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Menu;
