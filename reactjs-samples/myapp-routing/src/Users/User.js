import React from "react";
import { Link } from 'react-router-dom';

export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.state =  { 
        user: {
                name: '',  
                username: '',  
                email: '',  
                address: { 
                street: '',  
                suite : '',
                city: '',  
                zipcode: ''
            }
        }
    }
    this.goBack = this.goBack.bind(this);
    this.viewTodos = this.viewTodos.bind(this);

  }

  componentDidMount() {

    const id = this.props.location.state.id;  

    const url  =  'https://jsonplaceholder.typicode.com/users/' + id;

        fetch(url)
        .then(respose => respose.json())
        .then(user => { 
            this.setState({
               user : { ...user }
            }) ;      
        });
  }

  goBack() {
    if (this.props.history) {
      this.props.history.goBack();
    }
  }

  viewTodos() { 
    // if (this.props.history) {
    //     const url = "/todos/" + this.state.id;
    //     this.props.history.push(url);
    //   }
  }

  render() {
    return (
        <div className="container">
        <h2>{this.state.user.name} Details</h2>
        <div className="panel panel-default">
          <div className="panel-heading">Details of the user</div>
          <div className="panel-body">
              <table className='table'>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{this.state.user.name}</td>
                    </tr>
                    <tr>
                        <td>Username</td>
                        <td>{this.state.user.username}</td>
                    </tr>
                    <tr>
                        <td>Emaile</td>
                        <td>{this.state.user.email}</td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>
                            <ul className="list-group">
                                <li className="list-group-item">{this.state.user.address.street}</li>
                                <li className="list-group-item">{this.state.user.address.suite}</li>                                
                                <li className="list-group-item">{this.state.user.address.city}</li>
                                <li className="list-group-item">{this.state.user.address.zipcode}</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="3">
                          <button className='btn' onClick={this.goBack}>Back</button>
                         &nbsp;
                         <Link to={{
                            pathname: '/todos',  
                            state: { 
                                id: this.state.id
                            }    
                         }} className='btn btn-primary'>Todos</Link>
                        </td>
                    </tr>
                </tbody>
              </table>
          </div>
        </div>
      </div>
    );
  }
}
