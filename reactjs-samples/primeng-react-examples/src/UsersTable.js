import  React  from 'react';
import UserService from './services/userService';
import {DataTable, Column} from 'primereact/datatable';
import {OverlayPanel} from 'primereact/overlaypanel';

export default class UsersTable extends React.Component{
    constructor(props){ 
        super(props); 
        this.state = { users: [] };
        this.userService = new UserService();
    }

    componentDidMount(){ 
        this.userService.getUsers().then( data=>{ 
            this.setState({users: data});
        })
    }

    render(){ 
        return(
            <>
            <OverlayPanel ref={(el) => this.op = el}>
                <h4>Users</h4>
            </OverlayPanel>
            <DataTable 
                value={this.state.users} 
                paginator={true} 
                rows={7} 
                first={this.state.first} 
                onPage={(e) => this.setState({first: e.first})}>
                <Column field="name" header="Name">
                This is a test    
                </Column>
                <Column field="username" header="Username" />
                <Column field="email" header="Email" />
                <Column field="phone" header="Phone" />
            </DataTable>
            </>
        )
    }
}