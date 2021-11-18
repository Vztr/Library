import React, {useState} from 'react';
import './App.css';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import { Home, Books, Form, Login } from "./components/Main";

export const UserContext = React.createContext(null);

const App = () => {
  const [user, setUser] = useState(null);
  const saveUser = user => {
    setUser(user);
  };

  return (
    <Router>
      <UserContext.Provider value={{ user, saveUser }}>
        <nav className="nav">
          <Link to="/"><a href=" "><img src="Logo.png" alt="logo"></img></a></Link>
          <Link to="/books"><a href=" ">Books</a></Link>
          <Link to="/form"><a href=" ">Register</a></Link>
          <Link to="/login"><a href=" ">Login</a></Link>
        </nav>
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/books" component={Books} />
          <Route path="/form" component={Form} />
          <Route path="/login" component={Login} />
        </main>
      </UserContext.Provider>
    </Router>
  )
};

export default App;
