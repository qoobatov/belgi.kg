import React from "react";
import "./NewOrder.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

function NewOrder() {
  const navigate = useNavigate();
  const [showTradeList, setshowTradeList] = useState(false);
  const [showBayerServices, setshowBayerServices] = useState(false);
  const [showProduction, setshowProduction] = useState(false);

  const handleClickBack = () => {
    setshowTradeList(true);
    navigate("/my-trades");
  };
  const onClickBayerServices = () => {
    setshowBayerServices(true);
    navigate("/bayer-services");
  };
  const onClickProduction = () => {
    setshowProduction(true);
    navigate("/production");
  };

  return (
    <>
      <div className="new-order-container">
        <div className="new-order-content">
          <h3>Покупка и Производство:</h3>
          <div className="new-order-btn-group">
            <Button
              type="primary"
              className="btn-new-order-bulk-buy"
              onClick={onClickBayerServices}
            >
              Оптовые покупки
            </Button>

            <Button
              type="primary"
              className="btn-new-product"
              onClick={onClickProduction}
            >
              Производство
            </Button>
          </div>
          <Button
            type="primary"
            className="btn-new-order-back"
            onClick={handleClickBack}
          >
            Назад
          </Button>
          {showTradeList && navigate("/my-trades")}
          {showBayerServices && navigate("/bayer-services")}
          {showProduction && navigate("/production")}
        </div>
      </div>
    </>
  );
}

export default NewOrder;
