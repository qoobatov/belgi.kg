import { Link, useNavigate } from "react-router-dom";
import styles from "./style.module.sass";
import { Button } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { getBulkProduct, getProductionProduct } from "../api/api";

const MyDeals = () => {
  const [deals, setDeals] = useState();
  const [dealsProduct, setdealsProduct] = useState();
  const redirect = useNavigate();
  useEffect(() => {
    getBulkProduct(localStorage.getItem("id")).then((res) =>
      setDeals(res.bulk_buyings_product)
    );
    getProductionProduct(localStorage.getItem("id")).then((res) =>
      setdealsProduct(res.product)
    );
  }, []);

  return (
    <div className={styles.deals}>
      <div className={styles.deals__btn}>
        <Button type="primary" className="btn-mytrades-exit">
          <Link to="/selectDeals" style={{ width: "100%", display: "block" }}>
            Назад
          </Link>
        </Button>
      </div>
      <h2 className={styles.deals__title}>Оптовые</h2>
      <div className={styles.deals__cards}>
        {deals &&
          deals.map((item, index) => {
            return (
              <div key={index + Math.random()} className={styles.deals__list}>
                <h3>{item.ProductName}</h3>

                <Button
                  type="primary"
                  onClick={() => redirect(`/mydeals/${item.id}`)}
                  className="btn-mytrades-exit"
                  style={{ width: "150px" }}
                >
                  Подробнее
                </Button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MyDeals;
