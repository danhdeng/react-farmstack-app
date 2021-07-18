import React, { useState, useEffect} from 'react';
import './App.css';
import TodoListView from './components/todoListView';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {ITodo} from '../typing/todo';
import styled from "styled-components";
import tw from "twin.macro"; 
import AddTodoItem from "./components/addTodoItem";
import {Task} from './components/CssContainer'

const AppContainer=styled.div`
  box-shadow: 0 1.3px 12px -3px rgba(0,0,0,0.4);
  ${tw`
    p-1
    items-center
    justify-center
    bg-white
    margin-left[auto]
    margin-right[auto]
  `}
  width:400px;
  margin-top:15px;
`;

const TaskManager=styled.h1`
    position: relative;
    display: block;
    padding: .5rem 0.5rem;
    color: #212529;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid rgba(0,0,0,.125);
    min-width: 0;
    word-wrap: break-word;
    background-clip: border-box;
    border-radius: .25rem;
    width:24.5rem;
    ${
      tw`
        flex
        flex-col
        text-white
        bg-blue-600
        items-center
        justify-center
        mt-3
        rounded
      `
    }  
`;

const AppName=styled.h6`
  ${tw`
      flex
      flex-col
      bg-blue-600
      text-white
      items-center
      justify-center
      rounded
  `}
`;

const CopyRight=styled.h6`
  ${tw`
      flex
      flex-col
      bg-yellow-500
      text-white
      items-center
      justify-center
      rounded
      mb-3
      py-1 
  `}
`;



function App() {

  const [todoList, setTodoList] = useState([{}] as ITodo[])
  const [title, setTitle] = useState('') 
  const [desc, setDesc] = useState('')

  // Read all todos
  useEffect(() => {
    axios.get('http://localhost:8000/api/todo')
      .then(res => {
        setTodoList(res.data)
      })
  });

  // Post a todo
  const addTodoHandler = () => {
    axios.post('http://localhost:8000/api/todo/', { 'title': title, 'description': desc })
      .then(res => console.log(res))
};

  return (
    <>
    <AppContainer>
      <TaskManager>Task Manager</TaskManager>
      <AppName>FASTAPI - React - MongoDB</AppName>
     <div className="card-body">
       <Task>Add Your Task</Task>
       <AddTodoItem />
      <Task>Your Tasks</Task>
      <div >
      <TodoListView todoList={todoList} />
      </div>
      </div>
      <CopyRight>Copyright 2021, All rights reserved &copy;</CopyRight>
    </AppContainer>
    </>
  );
}

export default App;