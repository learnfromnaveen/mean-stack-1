import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//Class component syntax 
/*
   class <class_name> extends React.Component {

     render(){
       return (
         //JSX 
       )
     }
   }
*/

class Clock extends Component {
  
  constructor(props){
    console.log('inside constructor of clock');
    super(props);
    this.state = {
      date: new Date().toLocaleTimeString()
    };
  }

  /* Events Start */
  componentDidMount(){ 
    this.timerId = setInterval(() => {
      var newState =  { 
        date: new Date().toLocaleTimeString()
      };

      //update the state  
      this.setState(newState);
    }, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.timerId);
  }

  /* Events End */
  render(){
    const element = 
    <div>
      <h1>Hello, world!</h1>
      <h2>It is { this.state.date }.</h2>
      <h4>Country: { this.props.country}</h4>
    </div>
   
    return ( element );
  }
}


var element  = <div>
  <Clock country='India'/>
  <Clock country='US'/>
  <Clock country='Russia'/>
</div>
  ReactDOM.render(
  element,
  document.getElementById('root'));
