import React from 'react';
import { Link } from 'react-router-dom'; 

export default class Users extends React.Component{ 
    
    constructor(props){ 
        super(props);
        this.state = { 
            users: []
        };
    }

    componentDidMount() { 
        const url  =  'https://jsonplaceholder.typicode.com/users'; 
        fetch(url)
        .then(respose => respose.json())
        .then(users => { 
            this.setState( { 
                users: users
            });
        });
    }

     heroHeader() { 
        return(
            <thead> 
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Todos</th>
                </tr>
            </thead>
        ) 
    }


    heroBody() { 
        const rows = this.state.users.map( ( user ) => ( 
            <tr>
                <td><Link to={{
                   pathname: '/user',  
                   state: { 
                       id : user.id 
                    } 
                }}>{user.name}</Link></td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                <Link to={{
                   pathname: '/todos',  
                   state: { 
                       id : user.id 
                    } 
                }}>View</Link>
                </td>
            </tr>
        ));
        return (
            <tbody>  
                { rows }
            </tbody>
        )
    }

    render() { 
        return(
            <table className='table table-striped'> 
                {this.heroHeader()}
                { this.heroBody()}
            </table>
        );
    }
}