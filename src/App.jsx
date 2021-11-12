import './App.css';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import { Home, Categories, News, Top, About, Form } from "./components/Main";

function App() {
  return (
    <Router>
      <nav className="nav">
        <Link to="/"><a href=" "><img src="Logo.png" alt="logo"></img></a></Link>
        <Link to="/"><a href=" ">Home</a></Link>
        <Link to="/categories"><a href=" ">Categories</a></Link>
        <Link to="/top"><a href=" ">Top</a></Link>
        <Link to="/news"><a href=" ">News</a></Link>
        <Link to="/about"><a href=" ">About</a></Link>
        <Link to="/form"><a href=" ">Register</a></Link>
      </nav>
      <main>
        <Route exact path="/" component={Home} />
        <Route path="/categories" component={Categories} />
        <Route path="/news" component={News} />
        <Route path="/top" component={Top} />
        <Route path="/about" component={About} />
        <Route path="/form" component={Form} />
      </main>
    </Router>
  )
};

export default App;
