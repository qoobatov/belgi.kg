import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

function SubscribeNotification() {
const navigate = useNavigate()

  const handleChatButtonClick = () => {
    window.open("https://t.me/");
  };

  const handleClickExit = () => {
    navigate("/belgi.kg");
    localStorage.clear();
  };

  

  return (
    <div className="my-trades-container">
      <div className="my-trades-content">
        <h3 style={{ marginBottom: "20px" }}>
          Срок действия Вашей подписки истек. Пожалуйста, обновите ее.
        </h3>
        <button
          className="btn-mytrades-shopping"
          style={{ cursor: "pointer" }}
          onClick={handleChatButtonClick}
        >
          Обновить подписку
        </button>
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

export default SubscribeNotification;

