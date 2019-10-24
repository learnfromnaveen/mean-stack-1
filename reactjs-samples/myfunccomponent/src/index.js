import React from 'react';
import ReactDOM from 'react-dom';


/* 
    We are going to learn  
    1. How to creat a function component  
    2. Using function component inside JSX  
 
*/ 

//function component syntax  
/*
    function <ComponentName>(props){
      return (
        //JSX 
      );
    }
*/


//1. Passing properties(attributes) to function component  
function Welcome(props){ 
  return(
    <h1>Welcome {props.name}</h1>
  )
}

function App() { 
    return (
        <div> 
            <Welcome name='Vivaan'></Welcome>
            <Welcome name='Smith'></Welcome>
            <Welcome name='Jordan'></Welcome>
        </div>
    )
}

const element  = <App/>

ReactDOM.render(element
,document.getElementById('root'));

//Passing JSON to function component  
/*
function Welcome(props){ 
  return(
    <h1>Welcome {props.user.firstName + ', ' + props.user.lastName}</h1>
  )
}

const USER  = { 
  firstName : 'Vivaan',  
  lastName: 'Naveen'
}
ReactDOM.render(<Welcome user={USER}></Welcome>
,document.getElementById('root'));
*/


