import React from 'react';  
import Card from './card'
import './cardList.css';
class CardList extends React.Component{ 

    constructor(props){ 
        super(props);  
        this.state = { 
            users : []
        }

        this.onLoadUsersEvent = this.onLoadUsersEvent.bind(this);
    }

    onLoadUsersEvent(){ 
        const url = "https://jsonplaceholder.typicode.com/users";  
        fetch(url)
        .then( response => response.json())
        .then( usersJsonArray => {
            this.setState({users: usersJsonArray});
        });
    }

    componentDidMount(){ 
     
    }

    render() {
        const cardsElements = this.state.users.map(
            (user) => { 
                return <Card key={user.id.toString()} user = { user }/>
            }
        ) 
        return(
            <div>
                <div><button className='button' onClick={this.onLoadUsersEvent}>Load Users</button></div>
                <div>
                    {cardsElements}
                </div>
            </div>
        )
    }
}

export default CardList;