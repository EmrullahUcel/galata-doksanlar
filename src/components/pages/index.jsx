import React from "react";
import Header from "../Header";
import Card from "../Card/Card";
import Footer from "../Footer";

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
