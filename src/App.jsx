import "./App.css";
import React from "react";
// import logo from "./assets/logo.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const App = () => {
  return (
    <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
      <div className="container">
        <Switch>
          <Route path="/order"> 
          Pedidos
          </Route>
          <Route path="/menu"> 
            Menu
          </Route>
          <Route path="/newOrder"> 
          Nuevo Pedido
          </Route>     
          <Route path="/">
            Inicio
          </Route>
        </Switch>
      </div>
    </Router>
   )
};

export default App;
