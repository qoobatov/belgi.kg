import React from "react";
import { useEffect } from "react";
import { getOnlyBulkProduct } from "../api/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Info = () => {
  const redirect = useNavigate();
  // eslint-disable-next-line no-restricted-globals
  const path = location.pathname.substring(15);
  const [info, setInfo] = useState();
  useEffect(() => {
    getOnlyBulkProduct(path).then((res) => setInfo(res));
  }, []);

  const done = () => {
    redirect("/belgi.kg");
    localStorage.setItem("idBulk", path);
    localStorage.removeItem("role");
  };
  return (
    <div>
      <div className="ProductMoreInfo-container">
        <div className="ProductMoreInfo-content">
          <h4> Название </h4>
          <p>{info && info.data.attributes.ProductName}</p>
          <h4> Описание</h4>
          <p>{info && info.data.attributes.ProductDescription}</p> <br />
          <button className="ProductMoreInfo-btn" onClick={done}>Принять</button>
        </div>
      </div>
    </div>
  );
};

export default Info;
