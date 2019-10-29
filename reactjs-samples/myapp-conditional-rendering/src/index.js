import React, { Component } from 'react';
import { render } from 'react-dom';


function UserGreeting() { 
  return (
    <h2>Welcome Vivaan!!!</h2>
  )
}

function GuestGreeting() { 
  return(
    <h2>Welcome Guest!!!!</h2>
  )
}


function GreetUser(props){ 
  const element = props.isLoggedOn ? <UserGreeting/> : <GuestGreeting/>

  return element;
}

function App(){ 
  return(
    <GreetUser isLoggedOn={true}/>
  )
}

render(<App/>, document.getElementById('root'));
