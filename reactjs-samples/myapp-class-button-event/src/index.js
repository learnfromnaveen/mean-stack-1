import React, { Component } from "react";
import { render } from "react-dom";

/*
   Follow below steps to register the event  
    1. Create a method ( event ) that needs to be called when button is clicked  
      Example: toggleEvent method  
    2. Specify this in onClick event of button  
        Example:   <button onClick={this.toggleEvent}>..</button>
    3. Bind the toggleEvent in constructor  
       Example: this.toggleEvent = this.toggleEvent.bind(this);  
       
    if you use arrow function then you can omit step 3
    but avoid using this.
*/
class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    };

    //register the event
    //this.toggleEvent  = this.toggleEvent.bind(this);
  }
  //event to trigger when button is clicked
  // toggleEvent(){
  //   this.setState({
  //     isToggleOn: !this.state.isToggleOn
  //   })
  // }

  toggleEvent = () => {
    this.setState({ isToggleOn: !this.state.isToggleOn });
  };
  render() {
    return (
      <button onClick={this.toggleEvent}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

function App() {
  return <ToggleButton />;
}

render(<App />, document.getElementById("root"));
