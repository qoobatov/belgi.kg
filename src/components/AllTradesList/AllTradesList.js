import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getAllBulkProduct } from "../api/api";
import "./AllTradesList.css";

function AllTradesList() {
  const [allBulk, setAllBulk] = useState();
  const [text, setText] = useState("");
  useEffect(() => {
    getAllBulkProduct().then((res) => setAllBulk(res.data));
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

export default AllTradesList;
