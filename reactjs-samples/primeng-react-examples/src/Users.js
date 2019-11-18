import React from "react";
import { Panel } from "primereact/panel";
import UsersTable from "./UsersTable";

import {DataTable} from 'primereact/datatable';

export default class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        panelCollapsed: false
    }

    this.onToggle = this.onToggle.bind(this);
  }

  onToggle(event){
    console.log(event);
    this.setState({
        panelCollapsed: event.value
    })
  }

  render() {
    return (
      <Panel header="Godfather I" style={{marginTop:'2em'}} 
        toggleable={true} 
        collapsed={this.state.panelCollapsed}
        onToggle={this.onToggle}>
        <UsersTable/>
      </Panel>
    );
  }
}
