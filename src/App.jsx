import React from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
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

export default App;
