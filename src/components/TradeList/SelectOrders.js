import React from "react";
import { useNavigate } from "react-router-dom";

function SelectOrders() {
  const navigation = useNavigate();

  return (
    <>
      <div className="select-role-container">
        <div className="select-role-content">
          <h3>Выберите список заказов</h3>
          <div className="select-role-btns">
            <button
              className="select-role-customer"
              onClick={() => navigation("/trade-list")}
            >
              Оптовые
            </button>
            <button
              className="select-role-provider"
              onClick={() => navigation("/production-list")}
            >
              Производство
            </button>
          </div>
          <div className="select-role-login-block">
          <button
              className="select-role-provider-btn"
              onClick={() => navigation("/my-trades")}
            >
              Назад
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectOrders;
