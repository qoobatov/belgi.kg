import React from "react";
import { useEffect } from "react";
import { getOnlyBulkProduct } from "../api/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Info = () => {
  const redirect = useNavigate();
  // eslint-disable-next-line no-restricted-globals
  const path = location.pathname.substring(15);
  const [info, setInfo] = useState();
  const [img, setImg] = useState();
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    getOnlyBulkProduct(path).then((res) => {
      setInfo(res);

      setImg(() => {
        return [
          {
            file:
              "http://localhost:1337" +
              res.data.attributes.mediaBulk.data[0].attributes.url,
          },
          {
            file:
              "http://localhost:1337" +
              res.data.attributes.mediaBulk2.data[0].attributes.url,
          },
          {
            file:
              "http://localhost:1337" +
              res.data.attributes.mediaBulk3.data[0].attributes.url,
          },
          {
            file:
              "http://localhost:1337" +
              res.data.attributes.mediaBulk4.data[0].attributes.url,
          },
        ];
      });
    });
  }, []);

  const done = () => {
    if (localStorage.getItem("idBulk") === path) {
      setDisabled((disabled) => !disabled);
    } else {
      redirect("/belgi.kg");
      localStorage.setItem("idBulk", path);
      localStorage.removeItem("role");
    }
  };
  return (
    <div>
      <div className="ProductMoreInfo-container">
        <div className="ProductMoreInfo-content">
          <h4> Название </h4>
          <p>{info && info.data.attributes.ProductName}</p>
          <h4> Описание</h4>
          <p>{info && info.data.attributes.ProductDescription}</p> <br />
          <h4> Страна</h4>
          <p>{info && info.data.attributes.country}</p> <br />
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
          <button
            disabled={disabled}
            className="ProductMoreInfo-btn"
            onClick={done}
          >
            Принять
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
