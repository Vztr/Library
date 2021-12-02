import React, {useState} from 'react';
import { NavLink, Redirect,  Route, BrowserRouter as Router } from "react-router-dom";
import { Home, Books, Form, Login, Logout, Footer, Nav } from "./components/Main";
import './App.css';

export const UserContext = React.createContext(null);

const App = () => {
  const [user, setUser] = useState(null);

  const saveUser = user => {
    setUser(user);
    console.log(user.name, "User en app");
  };

  return (
    <Router>
      <UserContext.Provider value={{ user, saveUser }}>
        {/* <nav className="nav">
          <NavLink to="/"><img style={{width: "55%", display: "inline", margin: "auto", paddingTop: "0px"}} src="https://i.imgur.com/LWsPh0q.png" alt="logo"></img></NavLink>
          <>{ user ? (<NavLink to="/books">Books</NavLink>) : null}</>
          <>{ user ? (<NavLink to="/logout">Logout</NavLink>) : null}</>
          <>{!user ? (<NavLink to="/form">Register</NavLink>) : null}</>
          <>{!user ? (<NavLink to="/login">Login</NavLink>) : null}</>
        </nav> */}
        <Nav></Nav>
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/books" component={Books} />
          <Route path="/form" component={Form} />
          <Route path="/logout" component={Logout} render={() => {
            return user ? <Redirect to='/' /> : <Login/>
          }} />
          <Route path="/login" component={Login} />
          <Footer></Footer>
        </main>
      </UserContext.Provider>
    </Router>
  )
};

export default App;