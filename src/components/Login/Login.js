import React, { useEffect, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";
import { loginUser } from "../api/api";

function Login() {
  const [error, setError] = useState(false);
  const [user, setUser] = useState({
    identifier: "",
    password: "",
  });
  const [provider, setProvider] = useState({
    Provider: "",
  });
  const navigation = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("role") === "provider") {
      navigation("/authpage");
    } else if (localStorage.getItem("role") === "client") {
      navigation("/my-trades");
    } else {
      navigation("/belgi.kg");
    }
  }, []);

  const onFinish = async () => {
    loginUser(user)
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("jwt", data.jwt);
        localStorage.setItem("id", data.user.id);
        if (data.user.roleProvider) {
          localStorage.setItem("role", "provider");
        } else {
          localStorage.setItem("role", "client");
        }
        if (data.user.roleProvider) {
          navigation("/authpage");
        } else {
          navigation("/my-trades");
        }
      });

    // try {
    //   const response = await axios.get(`http://localhost:1337/api/users`);
    //   const users = response.data;
    //   const user = users.find(
    //     (person) =>
    //       person.email === values.email && person.pass === values.password
    //   );
    //   if (user) {
    //     if (values.remember) {
    //       // сохраняем id в локальном хранилище
    //       localStorage.setItem("id", user.id);
    //     } else {
    //       // удаляем id из локального хранилища
    //       localStorage.removeItem("id");
    //     }
    //     navigation("/my-trades");
    //   } else {
    //     setError(true);
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
  };

  const changeHandler = (event) => {
    setUser((user) => {
      return {
        ...user,
        [event.target.name]: event.target.value,
      };
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h3 className="login-title-belgi">BELGI</h3>
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          {error && (
            <span style={{ color: "red", margin: "0 auto", fontSize: "17px" }}>
              Неверный логин или пароль:
            </span>
          )}
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Пожалуйста, введите email",
              },
            ]}
          >
            <Input
              className="input-login"
              placeholder="Email"
              onChange={changeHandler}
              name="identifier"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Пожалуйста, введите пароль",
              },
            ]}
          >
            <Input.Password
              className="input-password"
              placeholder="Пароль"
              onChange={changeHandler}
              name="password"
            />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox className="login-remember-me">Запомнить меня</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-btn-enter"
            >
              Войти
            </Button>
          </Form.Item>
        </Form>
        {/* <div className="login-register-block">
          <span
            className="login-btn-register"
            onClick={() => navigation("/forgotPass")}
          >
            Забыли пароль?
          </span>
          <span>или</span>
          <span
            onClick={() => navigation("/select-role")}
            className="login-btn-register"
          >
            Зарегистрироваться
          </span>
        </div> */}
      </div>
    </div>
  );
}

export default Login;
