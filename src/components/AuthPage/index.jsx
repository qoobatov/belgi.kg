import { useNavigate } from "react-router-dom";
import styles from "./style.module.sass";
import { Button } from "antd";
import { useEffect } from "react";
import {
  AddBulkProductToProviders,
  AddProductionProductToProviders,
} from "../api/api";
import { useState } from "react";
import SubscribeNotification from "../SubscribeNotification/SubscribeNotification";

function AuthPage() {
  const navigate = useNavigate();
  const [provider, setProvider] = useState({
    Provider: "",
  });
  const handleClickExit = () => {
    navigate("/belgi.kg");
    localStorage.clear();
  };


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
  



  useEffect(() => {
    setProvider((provider) => {
      return {
        ...provider,
        Provider: localStorage.getItem("id"),
      };
    });
  }, []);
  if (localStorage.getItem("idBulk")) {
    AddBulkProductToProviders(localStorage.getItem("idBulk"), provider);
  } else {
    AddProductionProductToProviders(
      localStorage.getItem("idProduct"),
      provider
    );
  }
  const redirect = useNavigate();

  if (showNotification) {
    
    return <SubscribeNotification />;
  }
  
  return (
    <div className={styles.myTradesContainer}>
      <div className={styles.myTradesContent}>
        <h3>Ваши сделки или Ваша визитка:</h3>
        <p className={styles.myTradesDescription}>
          Выбириет что вас интересует
        </p>

        <div className={styles.btn}>
          <Button
            type="primary"
            htmlType="button"
            className="btn-mytrades-exit"
            onClick={() => redirect("/selectDeals")}
          >
            Мои сделки
          </Button>
          <Button
            type="primary"
            htmlType="button"
            onClick={() => redirect("/businescard")}
            className="btn-mytrades-exit"
          >
            Моя визитка
          </Button>
        </div>
        <div className={styles.myTradesContent__btn}></div>
        <Button
          type="primary"
          className="btn-mytrades-exit"
          style={{ marginBottom: "15px" }}
        >
          <a href="https://t.me/+ZhEG-wZjNtI4Yzky">Канал для заказов</a>
        </Button>
        <Button
          type="primary"
          className="btn-mytrades-exit"
          onClick={handleClickExit}
        >
          Выйти
        </Button>
      </div>
    </div>
  );
}

export default AuthPage;
