import { Button, QRCode, Space, Input } from "antd";
import styles from "./style.module.sass";
import { Link } from "react-router-dom";
import { useState } from "react";

const BusinesCard = () => {
  const [text, setText] = useState("belgi.kg");
  return (
    <div className={styles.bc}>
      <div className={styles.bc__btn}>
        <Button
          type="primary"
          style={{ margin: "auto" }}
          className="btn-mytrades-exit"
        >
          <Link to="/authpage">Назад</Link>
        </Button>
      </div>
      <div className={styles.bs__info}>
        <Space direction="vertical" align="center">
          <QRCode value={text || "-"} />
        </Space>
      </div>
      <Button
        type="primary"
        htmlType="submit"
        style={{ margin: "auto" }}
        className="btn-mytrades-exit"
      >
        <a href="https://google.com">Визитка</a>
      </Button>
    </div>
  );
};

export default BusinesCard;
