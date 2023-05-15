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

  console.log(info);

  const done = () => {
    redirect("/belgi.kg");
    localStorage.setItem("idProduct", path);
    localStorage.removeItem("role");
  };
  return (
    <div>
      <h2> Название: {info && info.data.attributes.nameOrder}</h2>
      <h2> Категория: {info && info.data.attributes.category}</h2>
      <h2> Описание: {info && info.data.attributes.descOrder}</h2>
      <h2> Количество: {info && info.data.attributes.quantity}</h2>
      <h2>
        Материалы для заказа: {info && info.data.attributes.materialOrder}
      </h2>
      <h2>Образец: {info && info.data.attributes.sample}</h2>
      <h2>Доставка: {info && info.data.attributes.delivery}</h2>
      <h2>Способ доставки: {info && info.data.attributes.deliveryType}</h2>
      <h2>
        Срок выполнения заказа: {info && info.data.attributes.orderDeadline}
      </h2>
      <h2>Условия оплаты: {info && info.data.attributes.payment}</h2>
      <h2>Доп. услуги: {info && info.data.attributes.moreServices}</h2>
      <h2>Примечания и комментарии: {info && info.data.attributes.comments}</h2>
      <h2>
        Фото и тз:{" "}
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
      </h2>
      <button onClick={done}>Принять</button>
    </div>
  );
};

export default InfoProduct;
