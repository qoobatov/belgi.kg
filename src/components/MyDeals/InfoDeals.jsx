import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getOnlyBulkProduct } from "../api/api";

function InfoDeals() {
  const navigate = useNavigate();
  const [infoDeals, setinfoDeals] = useState();
  // eslint-disable-next-line no-restricted-globals
  const path = location.pathname.substring(12);
  useEffect(() => {
    getOnlyBulkProduct(path).then((res) => setinfoDeals(res.data));
  }, []);
  return (
    <>
      {infoDeals && (
        <div className="BulkMoreInfo-container">
          <div className="BulkMoreInfo-content">
            <div className="BulkMoreInfo-title">
              <h4>Название</h4>
              <p>{infoDeals[0].attributes.ProductName}</p>
            </div>
            <div>
              <h4>Описание заказа</h4>
              <p className="BulkMoreInfo-desc">
              {infoDeals[0].attributes.ProductDescription}
              </p>
            </div>
            <button
              className="BulkMoreInfo-btn"
              onClick={() => navigate("/mydeals")}
            >
              Назад
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default InfoDeals;
