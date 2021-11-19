import React from "react";
import { withRouter } from "react-router-dom";
import { useContext } from "react";


const logout = () => setUser(null);


function LogoutButton({ logout, history }) {
  const handleClick = () => {
    logout();
    history.push("/");
  };
  return <button onClick={handleClick}>Logout</button>;
}

export default withRouter(LogoutButton);