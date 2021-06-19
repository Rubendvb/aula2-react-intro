import React from 'react';
import Form from '../../components/Form';
import List from '../../components/List';

class Main extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      data: {high:[], medium:[], low:[]},
    }
  }

  addTodo(event, taskDescription, priority){
    event.preventDefault();

    const todo = { text: taskDescription, priority: priority };

    switch (priority){
      case 'high':
        this.state.data.high.push(todo);
        break;
      case 'medium':
        this.state.data.medium.push(todo);
        break;
      case 'low':
        this.state.data.low.push(todo);
        break;
      default:
        break;
    }

    this.setState({data: this.state.data});
  };

  removeTodo(event,value){
    event.preventDefault();

    const remainder = this.state.data.filter((todo) => {
      if(todo.text !== value) return todo;
    });

    this.setState({data: remainder})
  }

  render() {
    return(
      <>
        <h1>Main</h1>
        <Form addTodo={this.addTodo.bind(this)}></Form>
        <List todos={this.state.data} remove={this.removeTodo.bind(this)}></List>
      </>
    )
  }

}

export default Main;