import React from 'react';  
import './nameForm.css';

class NameForm extends React.Component{ 
    constructor(props){ 
        super(props);

        this.state = { 
            name: ''
        }

        this.onChange  = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    onChange(event){ 
        //e.target will have the reference of the control which gave rise to this 
        //event 
        this.setState({
            name: event.target.value
        });
    }

    handleSubmit(event) { 
        event.preventDefault();
        console.log(this.state);
    }

    
    render() { 
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    *Name: 
                    <input type="text" 
                        value={this.state.name}
                        onChange={this.onChange}
                        className={ this.state.name === '' ? 'error' : ''}/>
                </label>
                <button disabled={this.state.name === ''}>Submit</button>
            </form>
        );
    }
}


export default NameForm;