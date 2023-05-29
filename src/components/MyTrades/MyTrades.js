import React, { useEffect } from "react";
import "./MyTrades.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import SubscribeNotification from "../SubscribeNotification/SubscribeNotification";

function MyTrades() {
  const navigate = useNavigate();
  const [showTradeList, setshowTradeList] = useState(false);
  const [showNewOrder, setshowNewOrder] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [subscriptionEndDate, setSubscriptionEndDate] = useState(null);
  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://localhost:1337/api/users");
  
        if (!response.ok) {
          throw new Error("Ошибка при получении данных");
        }
  
        const data = await response.json();
  
        if (data.length > 0) {
          const storedId = parseInt(localStorage.getItem("id"));
  
          const user = data.find((user) => user.id === storedId);
  
          if (user) {
            // console.log("Все отлично!");
  
            const { subscription } = user;
  
            console.log("ID пользователя:", storedId);
            console.log("Дата окончания подписки:", subscription);
  
            const currentDate = new Date();
            const subscriptionDate = new Date(subscription);
  
            if (currentDate > subscriptionDate) {
              setShowNotification(true);
            }
  
            setSubscriptionEndDate(subscriptionDate);
          }
        }
      } catch (error) {
        console.error("Произошла ошибка:", error);
      }
    };
  
    fetchUserData();
  
    const interval = setInterval(fetchUserData, 24 * 60 * 60 * 1000);
  
    return () => {
      clearInterval(interval);
    };
  }, []);
  


  const handleClick = () => {
    setshowTradeList(true);
    navigate("/select-order");
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
    localStorage.clear();
  };

  if (showNotification) {
    return <SubscribeNotification />;
    
  }

  return (
    <div className="my-trades-container">
      <div className="my-trades-content">
        <h3>Сделки или оформить заказ:</h3>
        <p className="my-trades-description">
          Если у вас нет текущих сделок, вы можете оформить заказ
        </p>

        <div className="my-trades-content-btns">
          <Button type="primary" className="btn-mytrades" onClick={handleClick}>
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
  );
}

export default MyTrades;
