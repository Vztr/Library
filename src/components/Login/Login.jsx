import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { loginUser } from "../../api/fetch_user";
import { UserContext } from "../../App";
import "../Login/Login.css"

const LoginForm = () => {
  const { user, saveUser } = useContext(UserContext);
  const [error, setError] = useState("");
  const history = useHistory();

  const submitForm = async (ev) => {
    ev.preventDefault();
    try {
      const { email, password } = ev.target;

      const form = {
        email: email.value,
        password: password.value,
      };

      const userDB = await loginUser(form);
      saveUser(userDB.data.user);
      history.push("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="login-container">
        <form className="login" onSubmit={submitForm}>
          <div className="form-group">
            <label>👤</label>
            <input className="input" type="text" name="email" placeholder="E-mail" />
          </div>
          <div>
            <label>🔑</label>
            <input className="input" type="password" name="password" placeholder="Contraseña" />
          </div>
          <div>
            <button className="button" type="submit">LOGIN</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;