import styled from "styled-components";

export const TaskForm = styled.form`
  background: #eee;
  padding: 20px 40px;
  border-radius: 10px;

  input, select{
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    margin-right: 10px;
  }
`;

export const Button = styled.button`
  background: ${(props)=> props.theme.primaryColor};
  border-radius: 10px;
  border: none;
  color: #fff;
  margin-left: 10px;
  padding: 5px 10px;
`;