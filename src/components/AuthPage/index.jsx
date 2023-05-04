import { useNavigate } from "react-router-dom";
import styles from "./style.module.sass";
import { Button } from "antd";

function AuthPage() {
  const navigate = useNavigate();
  const handleClickExit = () => {
    navigate("/belgi.kg");
    localStorage.clear();
  };
  const redirect = useNavigate();
  return (
    <div className={styles.myTradesContainer}>
      <div className={styles.myTradesContent}>
        <h3>Ваши сделки или Ваша визитка:</h3>
        <p className={styles.myTradesDescription}>
          Выбириет что вас интересует
        </p>

        <div className={styles.btn}>
          <Button
            type="primary"
            htmlType="button"
            className={styles.btnMytrades}
            onClick={() => redirect("/mydeals")}
          >
            Мои сделки
          </Button>
          <Button
            type="primary"
            htmlType="button"
            onClick={() => redirect("/businescard")}
          >
            Моя визитка
          </Button>
        </div>
        <div className={styles.myTradesContent__btn}></div>
        <Button
          type="primary"
          className="btn-mytrades-exit"
          onClick={handleClickExit}
        >
          Выйти
        </Button>
      </div>
    </div>
  );
}

export default AuthPage;
