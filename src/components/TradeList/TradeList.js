import React, { useEffect } from "react";
import "./TradeList.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { deleteBulkProduct, getBulkProduct } from "../api/api";
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
    navigate("/my-trades");
  };

  const handleClickShopping = () => {
    window.open("https://belgi.kg/#/shoppingtour", "_blank");
  };

  const deleteBulk = async (id) => {
    await deleteBulkProduct(id);
    window.location.reload();
  };

  return !bulkproducts ? (
    <Preloader />
  ) : (
    <>
      <div className="trade-list-container">
        <div className="trade-list-content">
          <h3>Ваши оптовые заказы:</h3>
          <div className="trade-more-info-container">
            {bulkproducts &&
              bulkproducts.map((data, index) => {
                return (
                  <div key={index + 1} className="trade-list-items-block">
                    <table>
                      <tr>
                        <th className="th-product-name-title">Название</th>
                        <th>Описание товара</th>
                      </tr>
                      <tr>
                        <td className="td-product-name">{data.ProductName}</td>
                        <td>{data.ProductDescription}</td>
                      </tr>
                    </table>
                    <div className="delete-trade-list-item-relative">
                      <button
                        className="delete-trade-list-item"
                        onClick={() => deleteBulk(data.id)}
                      >
                        &#215;
                      </button>
                    </div>
                  </div>
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
            назад
          </Button>
          {showTradeList && navigate("/my-trades")}
        </div>
      </div>
    </>
  );
}

export default TradeList;
