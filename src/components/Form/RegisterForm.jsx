import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { registerUser } from "../../api/fetch_user";
import "../Form/RegisterForm.css"

const INITIAL_STATE = {
  name: "",
  lastname: "",
  email: "",
  password: "",
};

const RegisterForm = () => {
  const history = useHistory();
  const [registerForm, setRegisterForm] = useState(INITIAL_STATE);
  const [error, setError] = useState(null);

  const submitForm = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await registerUser(registerForm);
      setRegisterForm(INITIAL_STATE);
      setError("");
      history.push("/register");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setRegisterForm({ ...registerForm, [name]: value });
  };

  return (
    <div className="register-container">
      <form className="register" onSubmit={submitForm} >
        <div className="Input_Container">
          <h1>Regístrate</h1>
          <div>
            <label className="Icono_register">🙍</label>
            <input className="input" type="text" name="name" value={registerForm.name} onChange={handleInput} placeholder="Nombre" />
          </div>
          <div>
            <label className="Icono_register">🙍</label>
            <input className="input" type="text" name="lastname" value={registerForm.lastname} onChange={handleInput} placeholder="Apellido" />
          </div>
          <div>
            <label className="Icono_register">📧</label>
            <input className="input" type="text" name="email" value={registerForm.email} onChange={handleInput} placeholder="E-mail" />
          </div>
          <div>
            <label className="Icono_register">🔑</label>
            <input className="input" type="password" name="password" value={registerForm.password} onChange={handleInput} placeholder="Contraseña" />
          </div>
          <button className="button_form" type="submit">Registrar usuario</button>
          {error && <div style={{ color: "#ffffff", fontWeight: "bold", paddingTop: "10px" }}>{error}</div>}
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;