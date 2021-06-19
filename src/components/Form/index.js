import React from 'react';
import { TaskForm, Button } from './styles';

class Form extends React.Component{
  constructor(props){
    super(props);
    this.state={
      task: '',
      select:'high',
    }
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event){
    this.setState({task: event.target.value});
  }

  onSelectChange(event){
    this.setState({select: event.target.value});
  }

  render(){
    return(
      <TaskForm onSubmit={(e) => this.props.addTodo(e, this.state.task, this.state.select)}>
        <input 
        type="text"
        value={this.state.task}
        onChange={this.onInputChange}
        placeholder="Adicione uma tarefa"
      />
        <select onChange={this.onSelectChange.bind(this)}>
          <option value="high">Alta</option>
          <option value="medium">Média</option>
          <option value="low">Baixa</option>
        </select>
        <Button type="submit">Adicionar Task</Button>
      </TaskForm>
    )
  }
}

export default Form;