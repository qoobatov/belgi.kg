import React from "react";
import "./Production.css";
import { Button } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Production() {
  const [showNewOrder, setshowNewOrder] = useState(false);
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    nameOrder: "",
    category: "",
    desc: "",
    quantity: "",
    materialOrder: "",
    sample: "",
    delivery: "",
    orderDeadline: "",
    payment: "",
    moreServices: "",
    comments: "",
  });

  const onChangeSelected = (e) => {
    setFormValues((formValues) => {
      return {
        ...formValues,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onClickBackNewOrder = () => {
    setshowNewOrder(true);
    navigate("/new-order");
  };

  const onFinish = async (e) => {
    e.preventDefault();

    const token = "6059462033:AAHMTNU6CakxUuMjoaiayqgkAN1R-cyxQ-A";
    const chat_id = "-1001950653999"; // это айди группы чата,https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
    // где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее
    const button = {
      text: "Принять заказ",
      url: `https://t.me/${localStorage.getItem("tg")}`,
    };

    // Создаем объект клавиатуры и добавляем нашу кнопку в нее
    const inlineKeyboard = {
      inline_keyboard: [[button]],
    };

    // Преобразуем объект клавиатуры в JSON строку
    const keyboardJSON = JSON.stringify(inlineKeyboard);

    // Формируем ссылку на API Телеграма с использованием нашей клавиатуры
    const url =
      "https://api.telegram.org/bot" +
      token +
      "/sendMessage?chat_id=" +
      chat_id +
      "&parse_mode=html&text=" +
      encodeURIComponent(
        "Наименование товара: " +
          formValues.nameOrder +
          "\nОписание товара: " +
          formValues.category +
          "\n"
      ) +
      "&reply_markup=" +
      encodeURIComponent(keyboardJSON);
    try {
      const response = await fetch(url);
      const data = await response.json();
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
      <div className="production-container">
        <div className="production-content">
          <h3>Производство:</h3>
          <form className="form-production">
            <label>
              Наименование заказа:
              <input
                id="production-inputs"
                className="production-nameOrder"
                placeholder="Н: Пошив блузки"
                name="nameOrder"
                onChange={onChangeSelected}
              />
            </label>
            <label className="production-lable-block">
              Выберите категорию:
              <select
                id="production-inputs"
                className="production-category"
                name="category"
                onChange={onChangeSelected}
              >
                <option value="Женская одежда">Женская одежда</option>
                <option value="Мужская одежда">Мужская одежда</option>
                <option value="Детская одежда">Детская одежда</option>
                <option value="Спецодежда">Спецодежда</option>
              </select>
            </label>
            <label className="production-lable-block">
              Описание заказа:
              <input
                id="production-inputs"
                className="production-descripton"
                placeholder="Н: Характеристики изделия/материала"
                name="descripton"
                onChange={onChangeSelected}
              />
            </label>
            <label className="production-lable-block">
              Количество:
              <input
                type="number"
                id="production-inputs"
                className="production-descripton"
                name="descripton"
                onChange={onChangeSelected}
              />
            </label>
            <button
              type="submit"
              className="btn-production-send-form"
              style={{ marginBottom: "10px" }}
              onClick={onFinish}
            >
              отправить в канал
            </button>
          </form>
          <button
            type="primary"
            className="btn-production-back"
            onClick={onClickBackNewOrder}
          >
            назад
          </button>
          {showNewOrder && navigate("/new-order")}
        </div>
      </div>
    </>
  );
}

export default Production;
