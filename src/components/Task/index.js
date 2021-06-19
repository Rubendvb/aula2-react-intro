import React from 'react';
import { Container, RemoveButton } from './styles';

const Task = ({todo, remove}) =>{
  return(
    <Container>
      {todo.text}
      <RemoveButton onClick={(e)=>remove(e, todo.text)}>
        Remover Task
      </RemoveButton>
    </Container>
  )
}

export default Task;