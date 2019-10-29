import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function onClickButton() { 
  alert('you clicked on button');
}


//1. Button click example 
/*
function App() { 
  return(
    <button onClick={onClickButton}>Click Here</button>
  )
}
*/

//2.Anchor click example  

function App() { 
    function handleClick(e){ 
        //cancells default event behaviour  
        e.preventDefault();  
      console.log('You clicked on anchor link...');      
    }

    return(
        <a href="https://www.google.com" onClick={handleClick}>Click here</a>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));
