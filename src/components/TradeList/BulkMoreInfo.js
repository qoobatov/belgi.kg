import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getOnlyBulkProduct } from "../api/api";
import "./BulkMoreInfo.css";

function BulkMoreInfo() {
  const navigate = useNavigate();
  const [info, setInfo] = useState(null);
  const [img, setImg] = useState([]);

  // eslint-disable-next-line no-restricted-globals
  const path = location.pathname.substring(12);

  useEffect(() => {
    getOnlyBulkProduct(path).then((res) => {
      setInfo(res.data);
      // console.log(res.data);
      setImg(() => {
        return [
          {
            file:
              "https://strapi.belgi.kg" +
              res.data.attributes.mediaBulk.data[0].attributes.url,
          },
          {
            file:
              "https://strapi.belgi.kg" +
              res.data.attributes.mediaBulk2.data[0].attributes.url,
          },
          {
            file:
              "https://strapi.belgi.kg" +
              res.data.attributes.mediaBulk3.data[0].attributes.url,
          },
          {
            file:
              "https://strapi.belgi.kg" +
              res.data.attributes.mediaBulk4.data[0].attributes.url,
          },
        ];
      });
    });
  }, []);
  // console.log(img);
  return (
    <>
      {info && (
        <div className="BulkMoreInfo-container">
          <div className="BulkMoreInfo-content">
            <div className="BulkMoreInfo-title">
              <h4>Название</h4>
              <p>{info.attributes.ProductName}</p>
            </div>
            <div>
              <h4>Описание заказа</h4>
              <p className="BulkMoreInfo-desc">
                {info.attributes.ProductDescription}
              </p>
            </div>
            <div>
              <h4>Страна</h4>
              <p className="BulkMoreInfo-desc">{info.attributes.country}</p>
            </div>

            <div className="ProductMoreInfo-title">
              <h4 className="photo-tz">Фото и Т/З</h4>
              <div className="ProductMoreInfo-photo-files-block">
                {img.map((data) => (
                  <div
                    className="ProductMoreInfo-photo-files-content"
                    key={data.file}
                  >
                    {data.file.endsWith(".pdf") ? (
                      <a
                        href={data.file}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        Документ PDF
                      </a>
                    ) : (
                      <a
                        href={data.file}
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
                ))}
              </div>
            </div>

            <button
              className="BulkMoreInfo-btn"
              onClick={() => navigate("/trade-list")}
            >
              Назад
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default BulkMoreInfo;
