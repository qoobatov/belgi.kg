import React from "react";
import "./Production.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addProductionProduct } from "../api/api";

function Production() {
  // *******************************************************

  // **************************************************** */
  const [showNewOrder, setshowNewOrder] = useState(false);
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    nameOrder: "",
    category: "Женская одежда",
    descOrder: "",
    quantity: "",
    materialOrder: "Предоставляет заказчик",
    sample: "Предоставляет заказчик",
    delivery: "Заказчик",
    deliveryType: "-",
    orderDeadline: "",
    mediaProduct: "",
    payment: "",
    moreServices: "",
    comments: "",
    users_permissions_users: "",
  });

  const onChangeSelected = (e) => {
    setFormValues((formValues) => {
      return {
        ...formValues,

        [e.target.name]: e.target.value,
        users_permissions_users: localStorage.getItem("id"),
      };
    });
  };

  const uploadFiles = (e) => {
    setFormValues((formValues) => {
      return {
        ...formValues,
        mediaProducts: URL.createObjectURL(e.target.files[0]),
      };
    });
  };

  const onClickBackNewOrder = () => {
    setshowNewOrder(true);
    navigate("/new-order");
  };

  const onFinish = async (e) => {
    e.preventDefault();

    addProductionProduct(formValues);

    const token = "6059462033:AAHMTNU6CakxUuMjoaiayqgkAN1R-cyxQ-A";
    const chat_id = "-1001950653999"; // это айди группы чата,https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
    // где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее
    const button = {
      text: "test btn",
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
          "\nВыберите категорию: " +
          formValues.category +
          "\nОписание заказа: " +
          formValues.descOrder +
          "\nКоличество: " +
          formValues.quantity +
          "\nФотографии: " +
          formValues.mediaProduct +
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
              <textarea
                cols={10}
                rows={5}
                id="production-inputs"
                className="production-descripton"
                placeholder="Н: Характеристики изделия/материала"
                name="descOrder"
                onChange={onChangeSelected}
              />
            </label>
            <label className="production-lable-block">
              Количество:
              <input
                type="number"
                id="production-inputs"
                className="production-descripton"
                name="quantity"
                onChange={onChangeSelected}
              />
            </label>
            <label className="production-lable-block">
              Материалы для заказа:
              <select
                id="production-inputs"
                className="production-material"
                name="materialOrder"
                onChange={onChangeSelected}
              >
                <option value="Предоставляет заказчик">
                  Предоставляет заказчик
                </option>
                <option value="Предоставляет исполнитель">
                  Предоставляет исполнитель
                </option>
                <option value="По договоренности">По договоренности</option>
              </select>
            </label>
            <label className="production-lable-block">
              Образец:
              <select
                id="production-inputs"
                className="production-sample"
                name="sample"
                onChange={onChangeSelected}
              >
                <option value="Предоставляет заказчик">
                  Предоставляет заказчик
                </option>
                <option value="По договоренности">По договоренности</option>
              </select>
            </label>
            {/* ****************************************************************** */}
            <label className="production-lable-block">
              Доставка:
              <select
                id="production-inputs"
                className="production-delivery"
                name="delivery"
                onChange={onChangeSelected}
              >
                <option value="Заказчик">Заказчик</option>
                <option value="Исполнитель">Исполнитель</option>
                <option value="По договоренности">По договоренности</option>
              </select>
            </label>
            <label className="production-lable-block">
              Способ доставки:
              <select
                id="production-inputs"
                className="production-deliveryType"
                name="deliveryType"
                onChange={onChangeSelected}
              >
                <option value="-">-</option>
                <option value="По договоренности">По договоренности</option>
                <option value="КАРГО">КАРГО</option>
                <option value="АВИА">АВИА</option>
              </select>
            </label>

            <label className="production-lable-block">
              Срок выполнения заказа:
              <input
                type="date"
                id="production-inputs"
                className="production-orderDeadline"
                name="orderDeadline"
                onChange={onChangeSelected}
                placeholder="Выберите дату"
              />
            </label>

            {/* ****************************************************************** */}

            <label className="production-lable-block">
              Фото:
              <input
   
              />
            </label>

            {/* ******************************************************************* */}

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
