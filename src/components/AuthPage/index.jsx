import { useNavigate } from "react-router-dom";
import styles from "./style.module.sass";
import { Button } from "antd";
import { useEffect } from "react";
import {
  AddBulkProductToProviders,
  AddProductionProductToProviders,
} from "../api/api";
import { useState } from "react";

function AuthPage() {
  const navigate = useNavigate();
  const [provider, setProvider] = useState({
    Provider: "",
  });
  const handleClickExit = () => {
    navigate("/belgi.kg");
    localStorage.clear();
  };

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
