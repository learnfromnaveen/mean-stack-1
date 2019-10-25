import React from 'react';
import ReactDOM from 'react-dom';

function Clock() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  return ( element );
}


function tick() { 
   ReactDOM.render(
    <Clock/>,
    document.getElementById('root')
  );
}

setInterval( tick, 1000);