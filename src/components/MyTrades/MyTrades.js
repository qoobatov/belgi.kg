import React from "react";
import "./MyTrades.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

function MyTrades() {
  const navigate = useNavigate();
  const [showTradeList, setshowTradeList] = useState(false);
  const [showNewOrder, setshowNewOrder] = useState(false);

  const handleClick = () => {
    setshowTradeList(true);
    navigate("/trade-list");
  };
  const handleClickNewOrder = () => {
    setshowNewOrder(true);
    navigate("/new-order");
  };
  const handleClickShopping = () => {
    window.open("https://belgi.kg/#/shoppingtour", "_blank");
  };
  const handleClickExit = () => {
    navigate("/belgi.kg");
    localStorage.removeItem('id')
  };

  return (
    <>
      <div className="my-trades-container">
        <div className="my-trades-content">
          <h3>Сделки или оформить заказ:</h3>
          <p className="my-trades-description">
            Если у вас нету текущих сделок, вы можете оформить заказ
          </p>
          <div className="my-trades-content-btns">
            <Button
              type="primary"
              className="btn-mytrades"
              onClick={handleClick}
            >
              Мои заказы
            </Button>
            <Button
              type="primary"
              className="btn-mytrades"
              onClick={handleClickNewOrder}
            >
              Оформить заказ
            </Button>
          </div>
          <Button
            type="primary"
            className="btn-mytrades-shopping"
            onClick={handleClickShopping}
          >
            Шоппинг тур
          </Button>
          <Button
            type="primary"
            className="btn-mytrades-exit"
            onClick={handleClickExit}
          >
            Выйти
          </Button>
          {showTradeList && navigate("/trade-list")}
          {showNewOrder && navigate("/new-order")}
        </div>
      </div>
    </>
  );
}

export default MyTrades;
