import React, { useEffect, useState } from "react";
import "./card.css";
import { databases } from "../../db/appwrite";
import { useSelector } from "react-redux";

const Card = () => {
  const [fetch, setFetch] = useState([]);
  const url = useSelector((state) => state.url);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [response1, response2, response3] = await Promise.all([
          databases.listDocuments(
            "66255569b4222891c12c",
            "66255572a9a0e2b3abb1"
          ),
          databases.listDocuments(
            "66255569b4222891c12c",
            "66264df00e14b65b1ec7"
          ),
          databases.listDocuments(
            "66255569b4222891c12c",
            "662670768cc435989105"
          ),
        ]);
        const combinedResults = [
          ...response1.documents,
          ...response2.documents,
          ...response3.documents,
        ];
        setFetch(combinedResults);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {fetch.map((item) => {
        if (item.category === url) {
          return (
            <div key={item.$id} className="card-container">
              <div className="card-wrapper">
                <img src={item.imgUrl || "/src/assets/coffee.jpg"} alt="" />
                <div className="card-description">
                  <h1>{item.name}</h1>
                  <p>{item.description}</p>
                  <div className="price">{item.price} ₺</div>
                </div>
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </>
  );
};

export default Card;
