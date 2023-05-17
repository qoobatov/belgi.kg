import React, { useEffect } from "react";
import "./TradeList.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { getBulkProduct } from "../api/api";
import Preloader from "../Preloader/Preloader";

function TradeList() {
  const navigate = useNavigate();
  const [showTradeList, setshowTradeList] = useState(false);
  const [bulkproducts, setBulkproducts] = useState();
  useEffect(() => {
    getBulkProduct(localStorage.getItem("id")).then((res) =>
      setBulkproducts(res.bulk_buyings)
    );
  }, []);
  // console.log(bulkproducts);

  const handleClick = () => {
    setshowTradeList(true);
    navigate("/select-order");
  };

  const handleClickShopping = () => {
    window.open("https://belgi.kg/#/shoppingtour", "_blank");
  };

  // const deleteBulk = async (id) => {
  //   await deleteBulkProduct(id);
  //   window.location.reload();
  // };
  // console.log(bulkproducts);
  return !bulkproducts ? (
    <Preloader />
  ) : (
    <>
      <div className="trade-list-container">
        <div className="trade-list-content">
          <h3>Ваши оптовые заказы:</h3>
          <div className="trade-more-info-container">
            <div className="title-trade-list">
            </div>
            {bulkproducts &&
              bulkproducts.map((data, index) => {
                // console.log(bulkproducts);
                
                return (
                  <>
                    <div key={index + 1} className="trade-list-items-block">
                      <div className="container-for-description">
                        <div  className="div-product-name">
                          {data.ProductName}
                        </div>
                        <div
                          className="trade-list-more-info-btn"
                          onClick={() => navigate(`/trade-list/${data.id}`)}
                        >
                          подробнее
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>

          <Button
            type="primary"
            className="btn-trade-list-shopping"
            onClick={handleClickShopping}
          >
            Шоппинг тур
          </Button>
          <Button
            type="primary"
            className="btn-trade-list-back"
            onClick={handleClick}
          >
            Назад
          </Button>
          {showTradeList && navigate("/my-trades")}
        </div>
      </div>
    </>
  );
}

export default TradeList;
