import React from "react";
import "./SelectRole.css";
import { useNavigate } from "react-router-dom";

function SelectRole() {
  const navigation = useNavigate();
  return (
    <>
      <div className="select-role-container">
        <div className="select-role-content">
          <h3>Выберите свою роль</h3>
          <div className="select-role-btns">
            <button
              className="select-role-customer"
              onClick={() => navigation("/register")}
            >
              Заказчик
            </button>
            <button
              className="select-role-provider"
              onClick={() => navigation("/register-provider")}
            >
              Поставщик
            </button>
          </div>
          <div className="select-role-login-block">
            <span>Уже есть аккаунт?</span>{" "}
            <span
              className="select-role-back-to-login"
              onClick={() => navigation("/belgi.kg")}
            >
              Авторизоваться
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectRole;
