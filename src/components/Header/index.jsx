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
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdcYOo23IxA34wWb8BUzwrGnfJYUygRi5l8Db5qyQmiQ&s"
          alt=""
        />
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
