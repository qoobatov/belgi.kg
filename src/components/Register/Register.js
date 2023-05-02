import React from "react";
import "./Register.css";
import { useState } from "react";
import { addUsers } from "../api/api";

function Register() {
  const [user, setUser] = useState({
    username: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    address: "",
    nameCompany: "",
    offert: false,
    password: "",
    pass: "",
  });

  const changeHandler = (event) => {
    setUser((user) => {
      return {
        ...user,
        [event.target.name]: event.target.value,
        pass: password,
      };
    });
    let password = user.password;
  };

  const offert = (e) => {
    setUser((user) => {
      return {
        ...user,
        offert: e.target.checked,
      };
    });
  };

  const submit = (event) => {
    event.preventDefault();

    addUsers(user);
  };

  return (
    <>
      <div className="register-container">
        <div className="register-content">
          <h3>Регистрация</h3>
          <form className="register-form" onSubmit={submit}>
            <label htmlFor="register-input-name">Имя</label>
            <input
              className="register-input"
              id="register-input-name"
              type="text"
              placeholder="Введите имя"
              name="username"
              onChange={changeHandler}
            />
            <label htmlFor="register-input-lastname">Фамилия</label>
            <input
              className="register-input"
              id="register-input-lastname"
              type="text"
              placeholder="Введите Фамилию"
              name="lastName"
              onChange={changeHandler}
            />
            <label htmlFor="register-input-namecompany">
              Название компании
            </label>
            <input
              className="register-input"
              id="register-input-namecompany"
              type="text"
              placeholder={`только для субконтракта`}
              name="nameCompany"
              onChange={changeHandler}
            />
            <label htmlFor="register-input-tel">Номер телефона</label>

            <input
              className="register-input"
              id="register-input-tel"
              type="number"
              placeholder="Введите телефон"
              name="phone"
              onChange={changeHandler}
            />
            <label htmlFor="register-input-email">E-mail</label>

            <input
              className="register-input"
              id="register-input-email"
              type="email"
              placeholder="Введите email"
              name="email"
              onChange={changeHandler}
            />
            <label htmlFor="register-input-country">Страна</label>

            <input
              className="register-input"
              id="register-input-country"
              type="text"
              placeholder="Введите страну"
              name="country"
              onChange={changeHandler}
            />
            <label htmlFor="register-input-city">Город</label>

            <input
              className="register-input"
              id="register-input-city"
              type="text"
              placeholder="Введите город"
              name="city"
              onChange={changeHandler}
            />
            <label htmlFor="register-input-adress">Адрес</label>

            <input
              className="register-input"
              id="register-input-adress"
              type="text"
              placeholder="Введите адрес доставки"
              name="address"
              onChange={changeHandler}
            />
            <label htmlFor="register-input-password">Пароль</label>

            <input
              className="register-input"
              id="register-input-password"
              type="password"
              placeholder="Password"
              name="password"
              onChange={changeHandler}
            />
            <div>
              <input
                id="offert"
                type="checkbox"
                onChange={offert}
                name="offert"
              />
              <label htmlFor="offert">Принять договор офферты</label>
            </div>
            <button className="register-btn" type="submit">
              Зарегистрироваться
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
