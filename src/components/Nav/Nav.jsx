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
                        <Link className="button_nav" to="/" onClick={handleClick}>
                            <img src="https://i.imgur.com/LWsPh0q.png" alt="logo"></img>
                        </Link>
                    </li>
                    <li>
                        {user && (
                            <Link className="button_nav" to="/books" onClick={handleClick}>
                                Posters
                            </Link>
                        )}
                    </li>
                    <li>
                        {user && (
                            <Link className="button_nav" to="/logout" onClick={handleClick}>
                                Logout
                            </Link>
                        )}
                    </li>
                    <li>
                    {!user && (
                        <Link className="button_nav" to="/form" onClick={handleClick}>
                           Register
                        </Link>
                    )}
                    </li>
                    <li>
                    {!user && (
                        <Link className="button_nav" to="/login" onClick={handleClick}>
                           Login
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