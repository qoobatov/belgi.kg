import React from "react";
import "./BayerServices.css";
import { Modal } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addBulkProduct } from "../api/api";

function BayerServices() {
  const [showNewOrder, setshowNewOrder] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [bulk, setBulk] = useState({
    ProductName: "",
    ProductDescription: "",
    users_permissions_users: "",
  });

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

  const changeHandler = (e) => {
    setBulk((bulk) => {
      return {
        ...bulk,
        [e.target.name]: e.target.value,
        users_permissions_users: localStorage.getItem("id"),
      };
    });
  };

  const submit = (e) => {
    e.preventDefault();
    addBulkProduct(bulk);

    const token = "6059462033:AAHMTNU6CakxUuMjoaiayqgkAN1R-cyxQ-A";
    const chat_id = "-1001979905864"; // это айди группы чата,https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
    // где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее
    const url =
      "https://api.telegram.org/bot" +
      token +
      "/sendMessage?chat_id=" +
      chat_id +
      "&parse_mode=html&text=" +
      encodeURIComponent(
        "Наименование товара: " +
          bulk.ProductName +
          "\nОписание товара: " +
          bulk.ProductDescription +
          "\nСсылка на сделки: " +
          "google.com"
      );
    try {
      const response = fetch(url);
      const data = response.json();
      if (data.ok) {
        setStatus("Ваша заявка отправлена");
      } else {
        setStatus("Ошибка");
      }
    } catch (error) {
      console.error(error);
      setStatus("Ошибка");
    }
  };

  return (
    <>
      <div className="bayer-services-container">
        <div className="bayer-services-content">
          <h3> Оптовые покупки:</h3>
          <form onSubmit={submit}>
            <label htmlFor="bayer-services-input-text">
              Что вы хотите купить?
              <input
                type="text"
                id="bayer-services-input-text"
                name="ProductName"
                onChange={changeHandler}
              />
            </label>
            <label htmlFor="bayer-services-input-textarea">
              Описание товара:
              <textarea
                name="ProductDescription"
                id="bayer-services-input-textarea"
                cols="30"
                rows="7"
                onChange={changeHandler}
              ></textarea>
            </label>
            <button
              className="btn-bayer-services-submit"
              type="submit"
              // onClick={showModal}
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
