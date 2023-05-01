import React from "react";
import "./TradeList.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

function TradeList() {
  const navigate = useNavigate();
  const [showTradeList, setshowTradeList] = useState(false);

  const handleClick = () => {
    setshowTradeList(true);
    navigate("/my-trades");
  };

  const handleClickShopping = () => {
    window.open("https://belgi.kg/#/shoppingtour", "_blank");
  };
  
  return (
    <>
      <div className="trade-list-container">
        <div className="trade-list-content">
          <h3>Ваши сделки:</h3>
          <div className="trade-more-info-container">
            <div className="trade-more-info">
              <span>Сделка#</span>
            </div>
            <div className="trade-more-info">
              <span>Сделка#</span>
            </div>
            <div className="trade-more-info">
              <span>Сделка#</span>
            </div>
            <div className="trade-more-info">
              <span>Сделка#</span>
            </div>
            <div className="trade-more-info">
              <span>Сделка#</span>
            </div>
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
