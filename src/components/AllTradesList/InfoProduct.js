import React from "react";
import { useEffect } from "react";
import { getOnlyProductionProduct } from "../api/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const InfoProduct = () => {
  const redirect = useNavigate();
  // eslint-disable-next-line no-restricted-globals
  const path = location.pathname.substring(16);
  const [info, setInfo] = useState();
  const [img, setimg] = useState();
  useEffect(() => {
    getOnlyProductionProduct(path).then((res) => {
      setInfo(res);
      setimg(() => {
        return [
          {
            file:
              "http://localhost:1337" +
              res.data.attributes.mediaProduct.data[0].attributes.url,
          },
          {
            file:
              "http://localhost:1337" +
              res.data.attributes.mediaProduct2.data[0].attributes.url,
          },
          {
            file:
              "http://localhost:1337" +
              res.data.attributes.mediaProduct3.data[0].attributes.url,
          },
          {
            file:
              "http://localhost:1337" +
              res.data.attributes.mediaProduct4.data[0].attributes.url,
          },
        ];
      });
    });
  }, []);


  const done = () => {
    redirect("/belgi.kg");
    localStorage.setItem("idProduct", path);
    localStorage.removeItem("role");
  };
  return (
    <div className="ProductMoreInfo-container">
      <div className="ProductMoreInfo-content">
        <h4> Название: </h4>
        <p>{info && info.data.attributes.nameOrder}</p>
        <h4> Категория: </h4>
        <p>{info && info.data.attributes.category}</p>
        <h4> Описание: </h4>
        <p>{info && info.data.attributes.descOrder}</p>
        <h4> Количество: </h4>
        <p>{info && info.data.attributes.quantity}</p>
        <h4>Материалы для заказа: </h4>
        <p>{info && info.data.attributes.materialOrder}</p>
        <h4>Образец:</h4>
        <p> {info && info.data.attributes.sample}</p>
        <h4>Доставка: </h4>
        <p>{info && info.data.attributes.delivery}</p>
        <h4>Страна: </h4>
        <p>{info && info.data.attributes.country}</p>
        <h4>Способ доставки: </h4>
        <p>{info && info.data.attributes.deliveryType}</p>
        <h4>Срок выполнения заказа: </h4>
        <p>{info && info.data.attributes.orderDeadline}</p>
        <h4>Условия оплаты: </h4>
        <p>{info && info.data.attributes.payment}</p>
        <h4>Доп. услуги: </h4>
        <p>{info && info.data.attributes.moreServices}</p>
        <h4>Примечания и комментарии: </h4>
        <p>{info && info.data.attributes.comments}</p>
        <h4>Фото и T/З: </h4> 
        <div className="ProductMoreInfo-photo-files-block">
          {img &&
            img.map((data) => {
              return (
                <div className="ProductMoreInfo-photo-files-content">
                  {data.file.endsWith(".pdf") ? (
                    <a
                      href={data.file}
                      key={Math.random()}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Документ PDF
                    </a>
                  ) : (
                    <a
                      href={data.file}
                      key={Math.random()}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img
                        style={{
                          width: "120px",
                          height: "120px",
                          objectFit: "contain",
                        }}
                        src={data.file}
                        alt=""
                      />
                    </a>
                  )}
                </div>
              );
            })}
        </div>
        <button className="ProductMoreInfo-btn" onClick={done}>
          Принять
        </button>
      </div>
    </div>
  );
};

export default InfoProduct;
