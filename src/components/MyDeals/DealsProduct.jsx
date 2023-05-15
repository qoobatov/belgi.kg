import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getBulkProduct, getProductionProduct } from "../api/api";
import { Button } from "antd";
import styles from "./style.module.sass";

const DealsProduct = () => {
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
      <h2 className={styles.deals__title}>Производство</h2>
      <div className={styles.deals__cards}>
        {dealsProduct &&
          dealsProduct.map((item, index) => {
            return (
              <div key={index + Math.random()} className={styles.deals__list}>
                <h3>{item.nameOrder}</h3>

                <Button
                  type="primary"
                  onClick={() => redirect(`/mydealsProducts/${item.id}`)}
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

export default DealsProduct;
