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
      <h2> Название: {info && info.data.attributes.ProductName}</h2>
      <h2> Описание: {info && info.data.attributes.ProductDescription}</h2>
      <button onClick={done}>Принять</button>
    </div>
  );
};

export default Info;
