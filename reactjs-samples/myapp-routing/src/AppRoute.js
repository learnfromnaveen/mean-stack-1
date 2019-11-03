import React from "react";
import {
    Switch,  
    Route
} from 'react-router-dom'


import Users from "./Users/Users";
import About from "./About/About";
import User from "./Users/User";
import Todos from "./Todo/Todos";


export default function AppRoute() {
  return (
    <Switch>
      <Route path="/" exact>
        <Users />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/user" render={(props) =>(
          <User {...props}/>
      )} />
      <Route path="/todos" render={(props) =>(
          <Todos {...props}/>
      )} /> 
    </Switch>
  );
}
