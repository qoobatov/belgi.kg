import React from "react";
import "./BayerServices.css";
import { Modal } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addBulkProduct } from "../api/api";
import axios from "axios";

function BayerServices() {
  const [selectedFile, setSelectedFile] = useState({
    file1: "",
    file2: "",
    file3: "",
    file4: "",
  });

  const [showNewOrder, setshowNewOrder] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const submit = async (e) => {
    e.preventDefault();

    if (!bulk.ProductName || !bulk.ProductDescription || !selectedFile) {
      alert("Заполните все поля");
    } else {
      addBulkProduct(bulk)
        .then((res) => res.json())
        .then((resp) => localStorage.setItem("idBulk", resp.data.id + 1));

      const formData = new FormData();
      formData.append("files", selectedFile.file1);
      formData.append("files", selectedFile.file2);
      formData.append("files", selectedFile.file3);
      formData.append("files", selectedFile.file4);

      const uploadResponse = await axios.post(
        "http://localhost:1337/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          params: {
            ref: "production",
            refId: localStorage.getItem("id"),
            field: "mediaBulk",
          },
        }
      );

      const fileId = uploadResponse.data[0].id;
      const fileId2 = uploadResponse.data[1].id;
      const fileId3 = uploadResponse.data[2].id;
      const fileId4 = uploadResponse.data[3].id;

      setBulk((formValues) => {
        return {
          ...formValues,
          mediaProduction: fileId,
        };
      });

      await axios
        .post("http://localhost:1337/api/productions", {
          data: {
            ...bulk,
            mediaBulk: fileId,
            mediaBulk2: fileId2,
            mediaBulk3: fileId3,
            mediaBulk4: fileId4,
          },
        })
        .then((res) => localStorage.setItem("idProduct", res.data.data.id));

      const token = "6059462033:AAHMTNU6CakxUuMjoaiayqgkAN1R-cyxQ-A";
      const chat_id = "-1001979905864";

      const button = {
        text: "Подробнее",
        url: `http://127.0.0.1:3000/allTradesList/${
          localStorage.getItem("idBulk") && localStorage.getItem("idBulk")
        }`,
      };

      const inlineKeyboard = {
        inline_keyboard: [[button]],
      };

      console.log(button.text);

      const keyboardJSON = JSON.stringify(inlineKeyboard);

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
            "\n"
        ) +
        "&reply_markup=" +
        encodeURIComponent(keyboardJSON);

      await fetch(url);

      localStorage.removeItem("tg");
      navigate("/my-trades");
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





            <button className="btn-bayer-services-submit">Отправить</button>
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
