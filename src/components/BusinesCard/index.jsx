import { Button } from "antd";
import styles from "./style.module.sass";
import { Link } from "react-router-dom";

const BusinesCard = () => {
  return (
    <div className={styles.bc}>
      <div className={styles.bc__btn}>
        <Button type="primary" style={{ margin: "auto" }}>
          <Link to="/authpage">Назад</Link>
        </Button>
      </div>
      <div className={styles.bs__info}>
        <h3>QR код</h3>
        <img src="#" alt="qr" />
      </div>
      <Button type="primary" htmlType="submit" style={{ margin: "auto" }}>
        <a href="https://google.com">Визитка</a>
      </Button>
    </div>
  );
};

export default BusinesCard;
