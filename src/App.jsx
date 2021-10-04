import "./App.css";
import React from "react";
import Home from './components/Home'
import Menu from './components/Menu'
import NewOrder from './components/NewOrder'
import Order from './components/Order'


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
const [client, setClient] = React.useState('');
  return (
    <Router>
      <div className="container-fluid">
        <Switch>
          <Route path="/order"> 
          <Order/>
          </Route>
          <Route path="/menu"> 
           <Menu
             client = {client}
           />
          </Route>
          <Route path="/newOrder"> 
          <NewOrder 
            setClientHandler = {setClient}
          />
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
