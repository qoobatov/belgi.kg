import React from "react";
import { useNavigate } from "react-router-dom";

const SelectDeals = () => {
  const navigation = useNavigate();
  return (
    <div className="select-role-container">
      <div className="select-role-content">
        <h3>Выберите список сделок</h3>
        <div className="select-role-btns">
          <button
            className="select-role-customer"
            onClick={() => navigation("/mydeals")}
          >
            Оптовые
          </button>
          <button
            className="select-role-provider"
            onClick={() => navigation("/mydealsProducts")}
          >
            Производство
          </button>
        </div>
        <div className="select-role-login-block">
          <button
            className="select-role-provider-btn"
            onClick={() => navigation("/authpage")}
          >
            Назад
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectDeals;
