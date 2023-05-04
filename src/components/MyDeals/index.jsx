import { Link, useNavigate } from "react-router-dom";
import styles from "./style.module.sass";
import { Button } from "antd";

const MyDeals = () => {
  const redirect = useNavigate();
  return (
    <div className={styles.deals}>
      <div className={styles.deals__btn}>
        <Button type="primary" style={{ margin: "auto" }}>
          <Link to="/authpage">Назад</Link>
        </Button>
      </div>
      <div className={styles.deals__cards}>
        {/* {deals.map((item, index) => {
          return (
            <div key={index + Math.random()} className={styles.deals__list}>
              <h3>{item.title}</h3>
              <Button
                type="primary"
                onClick={() => redirect(`/web-app-providers/deals/${item.id}`)}
              >
                Подробнее
                <Link to="/web-app-providers/deals">Подробнее</Link>
              </Button>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default MyDeals;
