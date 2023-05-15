// import React, { useState } from "react";
// import { changePassword } from "../api/api";

// function ChangePass() {
//   const [passwordRequest, setPasswordRequest] = useState({
//     password: "",
//     newPassword: "",
//     passwordConfirmation: "",
//   });
//   const changePasswordFoo = (e) => {
//     setPasswordRequest((passwordRequest) => {
//       return {
//         ...passwordRequest,
//         [e.target.name]: e.target.value,
//       };
//     });
//   };

//   const submitChangePassword = (e) => {
//     e.preventDefault();
//     console.log(passwordRequest);
//     changePassword(localStorage.getItem("jwt"), passwordRequest)
//       .then((resp) => {
//         localStorage.setItem("jwt", resp.jwt);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <div>
//       <form onSubmit={submitChangePassword}>
//         <div className="form-wrap">
//           <h2>Смена пароля</h2>

//           <div className="form-input-wrap">
//             <span className="caption">Старый пароль</span>
//             <input
//               type="password"
//               placeholder="Введите текущий пароль"
//               name="password"
//               onChange={changePasswordFoo}
//               required
//             />
//           </div>
//           <div className="form-input-wrap">
//             <span className="caption">Новый пароль</span>
//             <input
//               type="password"
//               placeholder="Введите новый пароль"
//               name="newPassword"
//               onChange={changePasswordFoo}
//               required
//             />
//           </div>
//           <div className="form-input-wrap">
//             <span className="caption">Подтвердите новый пароль</span>
//             {passwordRequest.newPassword !==
//               passwordRequest.passwordConfirmation && (
//               <span className="error">Пароли не совпадают</span>
//             )}
//             <input
//               type="password"
//               placeholder="Введите новый пароль еще раз"
//               name="passwordConfirmation"
//               onChange={changePasswordFoo}
//               required
//             />
//           </div>

//           <button type="default">Подтвердить</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default ChangePass;
