import { Link, useNavigate } from "react-router-dom";
import styles from "./style.module.sass";
import { Button } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { getBulkProduct } from "../api/api";

const MyDeals = () => {
  const [deals, setDeals] = useState("");
  const redirect = useNavigate();
  useEffect(() => {
    getBulkProduct(localStorage.getItem("id")).then((res) =>
      setDeals(res.bulk_buyings_product)
    );
  }, []);
  return (
    <div className={styles.deals}>
      <div className={styles.deals__btn}>
        <Button type="primary" style={{ margin: "auto" }}>
          <Link to="/authpage">Назад</Link>
        </Button>
      </div>
      <div className={styles.deals__cards}>
        {deals &&
          deals.map((item, index) => {
            return (
              <div key={index + Math.random()} className={styles.deals__list}>
                <h3>{item.ProductName}</h3>
                <h3>{item.ProductDescription}</h3>
                <Button
                  type="primary"
                  onClick={() => redirect(`/mydeals/${item.id}`)}
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
