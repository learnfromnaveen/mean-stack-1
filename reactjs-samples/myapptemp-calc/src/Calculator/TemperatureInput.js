import React from 'react';  
import './Calculator.css';
import BoilingVerdict from  './BoilingVerdict'

const ScaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };

export default class TemperatureInput extends React.Component{ 
    constructor(props){ 
        
        super(props);  
        
        this.onChange = this.onChange.bind(this);
    }

    onChange(event){ 
        this.props.onTemperatureChange(event.target.value);
    }

    render(){ 
        return(
            <fieldset className="calculator">
                <legend>Enter temperature in {ScaleNames[this.props.scale]}</legend>
                <input type="text" 
                    value={this.props.temperature}
                    onChange={this.onChange}/>
                <BoilingVerdict temperature={parseFloat(this.props.temperature)}/>
            </fieldset>
        )
    }
}