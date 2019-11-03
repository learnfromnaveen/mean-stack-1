import React from "react";

export default class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state =  { 
        todos:[]
    }
    this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {

    const id = this.props.location.state.id;  

    const url  =  'https://jsonplaceholder.typicode.com/todos?userId' + id;

        fetch(url)
        .then(respose => respose.json())
        .then(todos => { 
            this.setState({
               todos : todos
            }) ;      
        });
  }

  goBack() {
    if (this.props.history) {
      this.props.history.goBack();
    }
  }

  header(){ 
    return (
      <thead>  
        <th>
           Todos&nbsp; <button className='btn' onClick={this.goBack}>Back</button>
        </th>
      </thead>
    )
  }

  body() { 
    const rows = this.state.todos.map((todo) => { 
      return <tr><td>{todo.title}</td></tr>
    })

    return (
      <tbody>
          {rows}
      </tbody>
    )
  }
  render() {
    return (
       <div class="container">
         <table className='table table-hover'> 
           {this.header()}
           {this.body()}
         </table>
       </div>
    );
  }
}
