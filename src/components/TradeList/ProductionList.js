import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { getProductionProduct } from "../api/api";
import Preloader from "../Preloader/Preloader";

function ProductionList() {
  const navigate = useNavigate();
  const [showTradeList, setshowTradeList] = useState(false);
  const [production, setProduction] = useState();
  useEffect(() => {
    getProductionProduct(localStorage.getItem("id")).then((res) =>
      setProduction(res.productions)
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

  //   const deleteBulk = async (id) => {
  //     await deleteBulkProduct(id);
  //     window.location.reload();
  //   };

  return !production ? (
    <Preloader />
  ) : (
    <>
      <div className="trade-list-container">
        <div className="trade-list-content">
          <h3>Заказы на производство:</h3>
          <div className="trade-more-info-container">
            {production &&
              production.map((data, index) => {
                return (
                  <div key={index + 1} className="trade-list-items-block">
                    <table>
                      <tr>
                        <th className="th-product-name-title">Название</th>
                        <th>Описание товара</th>
                      </tr>
                      <tr>
                        <td className="td-product-name">{data.nameOrder}</td>
                        <td>{data.descOrder}</td>
                      </tr>
                    </table>
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

export default ProductionList;
