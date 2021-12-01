/* import React from 'react'
import './Nav.css';

const Nav = () => {
    return (
        <div>
            
        </div>
    )
}

export default Nav */


import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "../Nav/Nav.css";

const Navbar = ({ handleClick }) => {
    const { user } = useContext(UserContext);
    return (
        <div className="nav_container">
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/" onClick={handleClick}>
                            <img src="https://i.imgur.com/LWsPh0q.png" alt="logo"></img>
                        </Link>
                    </li>
                    <li>
                        {user && (
                            <Link to="/books" onClick={handleClick}>
                                Posters
                            </Link>
                        )}
                    </li>
                    <li>
                        {user && (
                            <Link to="/logout" onClick={handleClick}>
                                Cerrar sesión
                            </Link>
                        )}
                    </li>
                    <li>
                    {!user && (
                        <Link to="/form" onClick={handleClick}>
                           Registrate
                        </Link>
                    )}
                    </li>
                    <li>
                    {!user && (
                        <Link to="/login" onClick={handleClick}>
                           Inicia sesión
                        </Link>
                    )}
                    </li>
                    {/* {user && <p>Hello: {user.name}</p>} */}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;