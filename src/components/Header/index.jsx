import React from "react";
import { links } from "../../data/tile";
import "./header.css";
import { useDispatch } from "react-redux";
import { setUrl } from "../../redux/slice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header>
      <div className="title">
        <h1>Galata Doksanlar</h1>
      </div>
      <div className="links-container">
        <ul className="links">
          {links.map((link) => {
            return (
              <li className="link" key={link.url}>
                <button onClick={() => dispatch(setUrl(link.url))}>
                  {link.name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;
