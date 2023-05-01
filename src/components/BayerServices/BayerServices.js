import React from "react";
import "./BayerServices.css";
import { Modal } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BayerServices() {
  const [showNewOrder, setshowNewOrder] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const onClickBackNewOrder = () => {
    setshowNewOrder(true);
    navigate("/new-order");
  };

  const showModal = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="bayer-services-container">
        <div className="bayer-services-content">
          <h3> Оптовые покупки:</h3>
          <form>
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
            <button
              className="btn-bayer-services-submit"
              type="submit"
              onClick={showModal}
            >
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
      <Modal
        title="Отлично!"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Ваша заявка успешно отправлена в наш телеграм канал</p>
      </Modal>
    </>
  );
}

export default BayerServices;
