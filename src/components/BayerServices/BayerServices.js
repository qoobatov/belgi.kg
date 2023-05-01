import React from "react";
import "./BayerServices.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BayerServices() {
  const [showNewOrder, setshowNewOrder] = useState(false);
  const navigate = useNavigate();

  const onClickBackNewOrder = () => {
    setshowNewOrder(true);
    navigate("/new-order");
  };

  return (
    <>
      <div className="bayer-services-container">
        <div className="bayer-services-content">
          <h3> Оптовые покупки:</h3>
          <form action="#">
            <label htmlFor="bayer-services-input-text">
              Что вы хотите купить?
              <input type="text" id="bayer-services-input-text" name="text" />
            </label>
            <label htmlFor="bayer-services-input-textarea">
              Описание товара:
              <textarea
                name="textarea"
                id="bayer-services-input-textarea"
                cols="30"
                rows="7"
              ></textarea>
            </label>
            <button className="btn-bayer-services-submit" type="submit">
              Отправить
            </button>
          </form>

          <button
            className="btn-bayer-services-back"
            onClick={onClickBackNewOrder}
          >
            Назад
          </button>
          {showNewOrder && navigate("/new-order")}
        </div>
      </div>
    </>
  );
}

export default BayerServices;
