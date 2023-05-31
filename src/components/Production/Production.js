import React from "react";
import "./Production.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Production() {
  const [selectedFile, setSelectedFile] = useState({
    file1: "",
    file2: "",
    file3: "",
    file4: "",
  });

  const [showNewOrder, setshowNewOrder] = useState(false);
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    nameOrder: "",
    category: "Женская одежда",
    descOrder: "",
    quantity: "",
    materialOrder: "Предоставляет заказчик",
    sample: "Предоставляет заказчик",
    delivery: "Заказчик",
    country: "",
    deliveryType: "-",
    orderDeadline: "",
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

  const onClickBackNewOrder = () => {
    setshowNewOrder(true);
    navigate("/new-order");
  };

  const onFinish = async (e) => {
    e.preventDefault();

    if (
      !formValues.nameOrder ||
      !formValues.descOrder ||
      !formValues.quantity ||
      !formValues.orderDeadline ||
      !formValues.payment ||
      !formValues.moreServices ||
      !formValues.country ||
      !formValues.comments ||
      !selectedFile
    ) {
      alert("Заполните все поля");
    } else {
      const formData = new FormData();
      formData.append("files", selectedFile.file1);
      formData.append("files", selectedFile.file2);
      formData.append("files", selectedFile.file3);
      formData.append("files", selectedFile.file4);

      const uploadResponse = await axios.post(
        "https://strapi.belgi.kg/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          params: {
            ref: "production",
            refId: localStorage.getItem("id"),
            field: "mediaProduct",
          },
        }
      );

      const fileId = uploadResponse.data[0].id;
      const fileId2 = uploadResponse.data[1].id;
      const fileId3 = uploadResponse.data[2].id;
      const fileId4 = uploadResponse.data[3].id;

      setFormValues((formValues) => {
        return {
          ...formValues,
          mediaProduction: fileId,
        };
      });

      await axios
        .post("https://strapi.belgi.kg/api/productions", {
          data: {
            ...formValues,
            mediaProduct: fileId,
            mediaProduct2: fileId2,
            mediaProduct3: fileId3,
            mediaProduct4: fileId4,
          },
        })
        .then((res) => localStorage.setItem("idProduct", res.data.data.id));

      const token = "6059462033:AAHMTNU6CakxUuMjoaiayqgkAN1R-cyxQ-A";
      const chat_id = "-1001950653999";
      const button = {
        text: "Подробнее",
        url: `https://strapi.belgi.kg/allProductList/${
          localStorage.getItem("idProduct") && localStorage.getItem("idProduct")
        }`,
      };

      const inlineKeyboard = {
        inline_keyboard: [[button]],
      };

      const keyboardJSON = JSON.stringify(inlineKeyboard);

      const url =
        "https://api.telegram.org/bot" +
        token +
        "/sendMessage?chat_id=" +
        chat_id +
        "&parse_mode=html&text=" +
        encodeURIComponent(
          "<b><i>Наименование товара:</i></b>  " +
            formValues.nameOrder +
            "\n <b><i>Категория:</i></b>  " +
            formValues.category +
            "\n<b><i>Описание заказа:</i></b>  " +
            formValues.descOrder +
            "\n<b><i>Количество:</i></b>  " +
            formValues.quantity +
            "\n<b><i>Материалы для заказа:</i></b>  " +
            formValues.materialOrder +
            "\n<b><i>Образец:</i></b>  " +
            formValues.sample +
            "\n<b><i>Доставка:</i></b>  " +
            formValues.delivery +
            "\n<b><i>Страна:</i></b>  " +
            formValues.country +
            "\n<b><i>Способ доставки:</i></b>  " +
            formValues.deliveryType +
            "\n<b><i>Срок выполнения заказа:</i></b>  " +
            formValues.orderDeadline +
            "\n<b><i>Условия оплаты:</i></b>  " +
            formValues.payment +
            "\n<b><i>Дополнительные услуги:</i></b>  " +
            formValues.moreServices +
            "\n<b><i>Примечания и комментарии:</i></b>  " +
            formValues.comments +
            // "\n<b><i>Прикрепленные фото:</i></b>  " +
            // formValues.mediaProduct +
            "\n"
        ) +
        "&reply_markup=" +
        encodeURIComponent(keyboardJSON);
      await fetch(url);

      navigate("/my-trades");
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
                required
                maxLength="100"

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
                style={{ width: "100%", height: "150px" }}
                id="production-inputs"
                className="production-descripton"
                placeholder="Н: Характеристики изделия/материала"
                name="descOrder"
                onChange={onChangeSelected}
                maxLength="500"

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
                maxLength="50"

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
              Страна:
              <input
                type="text"
                id="production-inputs"
                className="production-payment"
                name="country"
                onChange={onChangeSelected}
                placeholder=""
                maxLength="100"

              />
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
              />
            </label>
            <label className="production-lable-block">
              Условия оплаты:
              <input
                type="text"
                id="production-inputs"
                className="production-payment"
                name="payment"
                onChange={onChangeSelected}
                placeholder="Н: предоплата, постоплата и т.д."
                maxLength="100"
              />
            </label>

            <label className="production-lable-block">
              Дополнительные услуги:
              <input
                type="text"
                id="production-inputs"
                className="production-moreServices"
                name="moreServices"
                onChange={onChangeSelected}
                placeholder="Н: упаковка, маркировка и т.д."
                maxLength="100"

              />
            </label>

            <label className="production-lable-block">
              Примечания и комментарии:
              <textarea
                style={{ width: "100%", height: "100px", resize: "none" }}
                id="production-inputs"
                className="production-comments"
                name="comments"
                onChange={onChangeSelected}
                maxLength="500"
              />
            </label>

            <label className="production-lable-block">
              Прикрепить фотографии:
              <input
                type="file"
                id="production-inputs"
                name="mediaProduct"
                onChange={(e) => {
                  setSelectedFile((selectedFile) => {
                    return {
                      ...selectedFile,
                      file1: e.target.files[0],
                    };
                  });
                }}
                multiple
              />
              <input
                type="file"
                id="production-inputs"
                name="mediaProduct"
                onChange={(e) => {
                  setSelectedFile((selectedFile) => {
                    return {
                      ...selectedFile,
                      file2: e.target.files[0],
                    };
                  });
                }}
                multiple
              />
              <input
                type="file"
                id="production-inputs"
                name="mediaProduct"
                onChange={(e) => {
                  setSelectedFile((selectedFile) => {
                    return {
                      ...selectedFile,
                      file3: e.target.files[0],
                    };
                  });
                }}
                multiple
              />
              <label htmlFor="production-inputs">
                Выбрать документ: (в формате PDF)
              </label>
              <input
                type="file"
                id="production-inputs"
                name="mediaProduct"
                onChange={(e) => {
                  setSelectedFile((selectedFile) => {
                    return {
                      ...selectedFile,
                      file4: e.target.files[0],
                    };
                  });
                }}
                multiple
              />
            </label>

            <button
              type="submit"
              className="btn-production-send-form"
              style={{ marginBottom: "10px" }}
              onClick={onFinish}
            >
              Отправить на канал
            </button>
          </form>
          <button
            type="primary"
            className="btn-production-back"
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

export default Production;
