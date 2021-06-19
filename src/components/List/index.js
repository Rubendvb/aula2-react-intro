import React from 'react';
import Task from '../Task';
import { Title } from './styles';

const List = ({todos, remove}) =>{
   
  return(
    <ul>
      {todos.high.length !== 0 ? 
      (
        <section>
        <Title color="#42baff">Alta Prioridade</Title>
        {todos.high.map((todo, index) =>{
          return(
              <Task todo={todo} remove={remove} key={index}></Task>
          )
        })}
      </section>
      ): ""}

      {!!todos.medium.length && (
         <section>
          <Title>Média Prioridade</Title>
          {todos.medium.map((todo, index) =>{
            return(<Task todo={todo} remove={remove} key={index}></Task>)
            })}
          </section>
      )}

      {!!todos.low.length && (     
         <section>
          <Title>Baixa Prioridade</Title>
          {todos.low.map((todo, index) =>{
          return(<Task todo={todo} remove={remove} key={index}></Task>)
          })}
        </section>
      )}


    </ul>
  )
};

export default List;