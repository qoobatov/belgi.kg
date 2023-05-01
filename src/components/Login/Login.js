import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { Form, Input, Button, Checkbox } from "antd";

function Login() {
  const [error, setError] = useState(false);
  const navigation = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["rememberMe"]);

  const onFinish = async (values) => {
    try {
      const response = await axios.get(`http://localhost:1337/api/users`);
      const users = response.data;
      const user = users.find(
        (person) =>
          person.email === values.email && person.password === values.pass
      );
      if (user) {
        if (values.rememberMe) {
          // сохраняем куку на 7 дней
          const expires = new Date();
          expires.setDate(expires.getDate() + 7);
          setCookie("rememberMe", true, { path: "/", expires });
        } else {
          // удаляем куку
          removeCookie("rememberMe", { path: "/" });
        }
        navigation("/page");
      } else {
        setError(true);
      }
    } catch (error) {
      console.error(error);
    }
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
            <Input className="input-login" placeholder="Email" />
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
            <Input.Password className="input-password" placeholder="Пароль" />
          </Form.Item>
          <Form.Item>
            <Checkbox name="checkbox" className="login-remember-me">
              Запомнить меня
            </Checkbox>
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
      </div>
    </div>
  );
}

export default Login;
