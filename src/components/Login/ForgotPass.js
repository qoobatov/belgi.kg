import React, { useState } from "react";
import { forgotPassword } from "../api/api";

function ForgotPass() {
  const [email, setEmail] = useState("");

  const change = (event) => {
    setEmail(event.target.value);
  };

  return (
    <>
      <div>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            forgotPassword(email);
          }}
        >
          <label htmlFor="">
            Введи свой емайл
            <input type="email" onChange={change} />
          </label>
          <button>Отправить</button>
        </form>
      </div>
    </>
  );
}

export default ForgotPass;
