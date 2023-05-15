import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getAllProductionList } from "../api/api";
import "./AllTradesList.css";

function AllProductList() {
  const [allBulk, setAllBulk] = useState();
  useEffect(() => {
    getAllProductionList().then((res) => setAllBulk(res.data));
  }, []);

  const count = () => {};

  return (
    <>
      <div>
        {allBulk &&
          allBulk.map((data) => {
            return (
              <div className={data.attributes.count === 10 && "disabled"}>
                <span>{data.attributes.ProductName}</span>
                <button onClick={count}>Нажми по братски</button>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default AllProductList;
