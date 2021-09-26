import "./App.css";
import React from "react";
import Home from './components/Home'
import Menu from './components/Menu'
import NewOrder from './components/NewOrder'
import Order from './components/Order'

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
          <Order/>
          </Route>
          <Route path="/menu"> 
           <Menu/>
          </Route>
          <Route path="/newOrder"> 
          <NewOrder />
          </Route>     
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
   )
};

export default App;
