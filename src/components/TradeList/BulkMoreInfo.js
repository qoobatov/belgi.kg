import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getOnlyBulkProduct } from "../api/api";
import "./BulkMoreInfo.css";

function BulkMoreInfo() {
  const navigate = useNavigate();
  const [info, setInfo] = useState();
  // eslint-disable-next-line no-restricted-globals
  const path = location.pathname.substring(12);
  useEffect(() => {
    getOnlyBulkProduct(path).then((res) => setInfo(res.data));
  }, []);
  return (
    <>
      {info && (
        <div className="BulkMoreInfo-container">
          <div className="BulkMoreInfo-content">
            <div className="BulkMoreInfo-title">
              <h4>Название</h4>
              <p>{info.attributes.ProductName}</p>
            </div>
            <div>
              <h4>Описание заказа</h4>
              <p className="BulkMoreInfo-desc">
                {info.attributes.ProductDescription}
              </p>
            </div>
            <button
              className="BulkMoreInfo-btn"
              onClick={() => navigate("/trade-list")}
            >
              Назад
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default BulkMoreInfo;
