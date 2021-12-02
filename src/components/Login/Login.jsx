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
            <h1>Login</h1>
            <div>
              <label>📧</label>
              <input className="input" type="text" name="email" placeholder="E-mail" />
            </div>
            <div>
              <label>🔑</label>
              <input className="input" type="password" name="password" placeholder="Password" />
            </div>
            <div>
              <button className="button_login" type="submit">Login</button>
              {error && <div style={{ color: "#ffffff", fontWeight: "bold" }}>{error}</div>}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;