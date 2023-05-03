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
    // e.preventDefault();

    const token = "6059462033:AAHMTNU6CakxUuMjoaiayqgkAN1R-cyxQ-A";
    const chat_id = "-1001950653999"; // это айди группы чата,https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
    // где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее
    const url =
      "https://api.telegram.org/bot" +
      token +
      "/sendMessage?chat_id=" +
      chat_id +
      "&parse_mode=html&text=" +
      encodeURIComponent(
        "Наименование заказа: " +
          formValues.nameOrder +
        //   "\nОписание заказа: " +
        //   formValues.desc +
        //   "\nКатегория: " +
        //   formValues.category +
        //   "\nКоличество: " +
        //   formValues.quantity +
        //   "\nУсловия оплаты: " +
        //   formValues.payment +
        //   "\nДополнительные услуги: " +
        //   formValues.moreServices +
        //   "\nПримечания и комментарии: " +
        //   formValues.comments +
          "\nСсылка на сделки: " +
          "google.com"
      );
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
          <form className="form-production" onFinish={onFinish}>
            
            <label>
              Наименование заказа:
              <input
                className="production-nameOrder"
                placeholder="Например: Пошив блузки"
                name="nameOrder"
                onChange={onChangeSelected}
              />
            </label>

            <Button
              type="primary"
              htmlType="submit"
              className="btn-production-send-form"
              style={{ marginBottom: "10px" }}
            >
              отправить в канал
            </Button>
          </form>
          <Button
            type="primary"
            className="btn-production-back"
            onClick={onClickBackNewOrder}
          >
            назад
          </Button>
          {showNewOrder && navigate("/new-order")}
        </div>
      </div>
    </>
  );
}

export default Production;
