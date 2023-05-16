import React, { useState } from "react";
import { forgotPassword } from "../api/api";
import { useNavigate } from "react-router-dom";

function ForgotPass() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate()

  const change = (event) => {
    setEmail(event.target.value);
  };

  return (
    <>
      <div className="login-container">
        <div className="login-content">
          <h2>Введите свой email</h2> <br />
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              forgotPassword(email);
            }}
          >
              <input type="email" onChange={change} id="production-inputs" style={{marginBottom:"15px"}} required autoComplete="off"/>
            <button className="btn-production-send-form" style={{border:"none"}} onClick={()=>navigate('/belgi.kg')}>Отправить</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ForgotPass;
