import "./App.css";
import React from "react";
import Home from './components/Home'
import Menu from './components/Menu'
import NewOrder from './components/NewOrder'
import Orders from './components/Orders'
import Cuisine from './components/Cuisine'
import Waiter from './components/Waiter'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
const [client, setClient] = React.useState('');
const [tab, setTab] = React.useState('');
const [getColletionOrder, setGetColletionOrder] = React.useState('');
  return (
    <Router>
      <div className="container-fluid">
        <Switch>
          <Route path="/order"> 
          <Orders/>
          </Route>
          <Route path="/menu"> 
           <Menu
             client = {client}
             tab={tab}
             getColletionOrder={getColletionOrder}
            
           />
          </Route>
          
          <Route path="/newOrder"> 
          <NewOrder 
            setClientHandler = {setClient}
            setTabHandler = {setTab} 
            setGetColletionOrder={setGetColletionOrder}
          />
          </Route>
          <Route path="/cousine">
          <Cuisine/>
          </Route>
          <Route path="/waiter">
          <Waiter/>
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
