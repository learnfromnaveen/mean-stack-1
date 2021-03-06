import React from "react";
import FormData from './FormData'

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      dob: "",
      gender: "",
      iAgree: false,  
      showConfirmation: false,  
      isFormValid: false
    };

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(event) {
    //name given to contorl will be the key
    var key = event.target.name;
    var value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    this.setState({
      [key]: value
    });

    if( key === 'iAgree' && value ){
      this.validate(); 
    }
  }

  validate(){ 
    if(this.state.firstName !== ''){
      this.setState({isFormValid: true});
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
       showConfirmation: true
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="control">
            <label>
              Firstname:
              <br />
              <input
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.onChange}
              />
            </label>
          </div>
          <div className="control">
            <label>
              Lastname:
              <br />
              <input
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.onChange}
              />
            </label>
          </div>
          <div className="control">
            <label>
              Email:
              <br />
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
              />
            </label>
          </div>
          <div className="control">
            <label>
              Date of birth:
              <br />
              <input
                type="text"
                name="dob"
                value={this.state.dob}
                onChange={this.onChange}
              />
            </label>
          </div>
          <div className="control">
            <label>
              Gender:
              <br />
              <select onChange={this.onChange} name="gender">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </label>
          </div>
          <div className="control">
            <label>
              <input
                type="checkbox"
                name="iAgree"
                checked={this.state.iAgree}
                onChange={this.onChange}
              />
              &nbsp;I agree to terms &amp; conditions
            </label>
          </div>

          <div className="control-action">
            <button disabled={this.state.isFormValid === false}>Submit</button>
          </div>
        </form>
        { this.state.showConfirmation ? <FormData formData={this.state} /> : '' }
      </div>
    );
  }
}

export default RegisterForm;
