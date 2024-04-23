import React, { useEffect, useState } from "react";
import "./admin.css";
import { databases } from "../../db/appwrite";
import { message } from "antd";

const Admin = () => {
  const [productName, setProductName] = useState("");
  const [products, setProducts] = useState([]);
  const [searchResult, setSearchResult] = useState(null);
  const [product, setProduct] = useState({
    $id: null,
    name: "",
    category: "",
    description: "",
    imgUrl: "",
    $collectionId: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [response1, response2, response3, response4] = await Promise.all([
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
          databases.listDocuments(
            "66255569b4222891c12c",
            "6626a6b9585a34a078b5"
          ),
        ]);
        const combinedResults = [
          ...response1.documents,
          ...response2.documents,
          ...response3.documents,
          ...response4.documents,
        ];
        setProducts(combinedResults);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const updateDocument = async (e) => {
    e.preventDefault();
    try {
      await databases.updateDocument(
        "66255569b4222891c12c",
        product.$collectionId,
        product.$id,
        {
          name: product.name,
          category: product.category,
          description: product.description,
          imgUrl: product.imgUrl,
          price: product.price,
        }
      );
      message.success("Ürün başarıyla güncellendi.");
    } catch (error) {
      message.error("Ürün güncelleme işlemi sırasında bir hata oluştu:", error);
    }
  };

  const formSubmit = async (event) => {
    event.preventDefault();
    const searchedProduct = products.find(
      (product) => product.name.toLowerCase() === productName.toLowerCase()
    );
    if (searchedProduct) {
      setSearchResult(searchedProduct);
      message.success("Aradığınız ürün bulundu");
    } else {
      message.error("Aradığınız ürün bulunamadı");
    }
    setProduct(searchedProduct || {});
  };

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  return (
    <div className="form-div">
      <form className="submit-form" onSubmit={formSubmit}>
        <h1>Ürün Ara</h1>
        <input
          type="text"
          name="name"
          value={productName}
          onChange={handleProductNameChange}
          placeholder="Ürün adı girin"
        />
        <button className="submit" type="submit">
          Ürünü Bul
        </button>
      </form>
      <div className="product-container">
        {searchResult ? (
          <div key={searchResult.$id} className="card-container">
            <div className="card-wrapper">
              <img
                src={
                  searchResult.imgUrl ||
                  "https://www.kitapfabrikasi.com/tasarim-odasi/hazir-kitaplar/2014/374/zkf1-90lar.jpg"
                }
                alt=""
              />
              <div className="card-description">
                <h1>{searchResult.name}</h1>
                <p>{searchResult.description}</p>
                <div className="price">{searchResult.price} ₺</div>
              </div>
            </div>
            <div className="form-container">
              <form className="" onSubmit={updateDocument}>
                <label htmlFor="">
                  Ürün adı
                  <input
                    type="text"
                    name="name"
                    value={product.name}
                    onChange={handleInputChange}
                  />
                </label>
                <label htmlFor="">
                  Ürün Kategorisi
                  <input
                    type="text"
                    name="category"
                    value={product.category}
                    onChange={handleInputChange}
                  />
                </label>
                <label htmlFor="">
                  Ürün Açıklaması
                  <input
                    type="text"
                    name="description"
                    value={product.description}
                    onChange={handleInputChange}
                  />
                </label>
                <label htmlFor="">
                  Ürün Resim Linki
                  <input
                    type="text"
                    name="imgUrl"
                    value={product.imgUrl}
                    onChange={handleInputChange}
                  />
                </label>
                <label htmlFor="">
                  Ürün Fiyatı
                  <input
                    type="number"
                    name="price"
                    value={product.price}
                    onChange={handleInputChange}
                  />
                </label>
                <button className="update" type="submit">
                  Ürünü Güncelle
                </button>
              </form>
            </div>
          </div>
        ) : (
          "Ürün bulunamadı"
        )}
      </div>
    </div>
  );
};

export default Admin;
