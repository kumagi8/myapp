import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Pagination = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentpage] = useState(1);

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://dummyjson.com/products?limit=100");
      const products = await response.json();
      setData(products.products);
    }
    getData();
  }, []);
  const lowerbound = currentPage * 10 - 10;
  const upperbound = currentPage * 10;
  const currentProds = data.slice(lowerbound, upperbound);
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "col",
        justifyContent: "center",
      }}
    >
      <div>
        <div>
          <h1>Products</h1>
          {currentProds.map((prd) => {
            return <p key={prd.id}>{prd.title}</p>;
          })}
        </div>
        <div>
          <span onClick={() => setCurrentpage(currentPage - 1)}>prev</span>
          {[...Array(data.length / 10)].map((_, i) => (
            <span
              onClick={() => setCurrentpage(i + 1)}
              style={{
                margin: ".2rem",
                border: "1px black solid",
                padding: "0 .5rem",
              }}
              key={i}
            >
              {i + 1}
            </span>
          ))}
          <span onClick={() => setCurrentpage(currentPage + 1)}>next</span>
        </div>
      </div>
    </div>
  );
};
export default Pagination;
