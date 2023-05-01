import React, { useEffect } from "react";
import "./Login.css";
import { Button, Form, Input, Checkbox } from "antd";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { authUsers } from "../api/api";

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [users, setUsers] = useState();
  const [stateUsers, setStateUsers] = useState({
    identifier: "",
    password: "",
  });

  useEffect(() => {
    authUsers().then((res) => setUsers(res));
  }, []);

  const onFinish = () => {
    users &&
      users.map((data) => {
        console.log(data);
        if (
          data.email === stateUsers.identifier &&
          data.pass === stateUsers.password
        ) {
          navigate("/mytrades");
        }
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const changeHandle = (e) => {
    setStateUsers((stateUsers) => {
      return {
        ...stateUsers,
        [e.target.name]: e.target.value,
      };
    });
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
            name="identifier"
            rules={[
              {
                required: true,
                message: "Пожалуйста, введите логин",
              },
            ]}
          >
            <Input
              className="input-login"
              placeholder="email"
              onChange={changeHandle}
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
              onChange={changeHandle}
              name="password"
            />
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
