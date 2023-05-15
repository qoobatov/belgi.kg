import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getOnlyProductionProduct } from "../api/api";

function InfoDealsPoduct() {
  const [productInfo, setProductInfo] = useState();
  const [img, setimg] = useState();
  // eslint-disable-next-line no-restricted-globals
  const path = location.pathname.substring(17);
  useEffect(() => {
    getOnlyProductionProduct(path).then((res) => {
      setProductInfo(res.data);
      // console.log(
      //   "http://localhost:1337" +
      //     res.data.attributes.mediaProduct.data[0].attributes.url
      // );
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

  // console.log(productInfo && productInfo.attributes);
  console.log(img && img);

  const navigate = useNavigate();

  return (
    <>
      {productInfo && (
        <div className="ProductMoreInfo-container">
          <div className="ProductMoreInfo-content">
            <div className="ProductMoreInfo-title">
              <h4>Наименование заказа</h4>
              <p>{productInfo.attributes.nameOrder}</p>
            </div>
            <div className="ProductMoreInfo-title">
              <h4>Категория заказа</h4>
              <p>{productInfo.attributes.category}</p>
            </div>
            <div className="ProductMoreInfo-title">
              <h4>Описание заказа</h4>
              <p>{productInfo.attributes.descOrder}</p>
            </div>
            <div className="ProductMoreInfo-title">
              <h4>Количество</h4>
              <p>{productInfo.attributes.quantity}</p>
            </div>
            <div className="ProductMoreInfo-title">
              <h4>Материалы для заказа</h4>
              <p>{productInfo.attributes.materialOrder}</p>
            </div>
            <div className="ProductMoreInfo-title">
              <h4>Образец</h4>
              <p>{productInfo.attributes.sample}</p>
            </div>
            <div className="ProductMoreInfo-title">
              <h4>Доставка</h4>
              <p>{productInfo.attributes.delivery}</p>
            </div>
            <div className="ProductMoreInfo-title">
              <h4>Способ доставки</h4>
              <p>{productInfo.attributes.deliveryType}</p>
            </div>
            <div className="ProductMoreInfo-title">
              <h4>Срок выполнения заказа</h4>
              <p>
                {productInfo.attributes.orderDeadline
                  .split("-")
                  .reverse()
                  .join("-")}
              </p>
            </div>
            <div className="ProductMoreInfo-title">
              <h4>Условия оплаты</h4>
              <p>{productInfo.attributes.payment}</p>
            </div>
            <div className="ProductMoreInfo-title">
              <h4>Дополнительные услуги</h4>
              <p>{productInfo.attributes.moreServices}</p>
            </div>
            <div className="ProductMoreInfo-title">
              <h4>Примечания и комментарии</h4>
              <p>{productInfo.attributes.comments}</p>
            </div>

            <div className="ProductMoreInfo-title">
              <h4 className="photo-tz">Фото и Т/З</h4>
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
                              style={{ width: "120px", height: "120px", objectFit: "contain" }}
                              src={data.file}
                              alt=""
                            />
                          </a>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
            <button
              className="ProductMoreInfo-btn"
              onClick={() => navigate("/mydealsProducts")}
            >
              Назад
            </button>
          </div>
        </div>
      )}
    </>
  );
}


export default InfoDealsPoduct;
