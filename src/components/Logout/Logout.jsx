
import React, { useContext } from "react";
import { UserContext } from "../../App";


const Logout = () =>{

  const {user} = useContext(UserContext);

  window.location.href = "/";

  localStorage.clear();

  return <React.Fragment></React.Fragment>;
}

export default Logout;