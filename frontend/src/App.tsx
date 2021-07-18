import React, { useState, useEffect} from 'react';
import './App.css';
import TodoListView from './components/todoListView';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {ITodo} from '../typing/todo';
import styled from "styled-components";
import tw from "twin.macro"; 

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

const Header=styled.h1`
    position: relative;
    display: block;
    padding: .5rem 1rem;
    color: #212529;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid rgba(0,0,0,.125);
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;
    width:25rem;
    ${
      tw`
        text-white
        bg-blue-400
        items-center
        mt-3
      `
    }
    
`;

function App() {

  const [todoList, setTodoList] = useState([{}] as ITodo[])
  const [title, setTitle] = useState('') 
  const [desc, setDesc] = useState('')
  const maxWidth={

    
  }
    

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
      {/* this is a test
    </AppContainer>
    <div className="App list-group-item  justify-content-center align-items-center mx-auto" style={{"width":"400px", "backgroundColor":"white", "marginTop":"15px"}} > */}
      {/* <h1 className="card text-white bg-primary mb-1 mt-3" style={{"width":"23rem"}}>Task Manager</h1> */}
      <Header>Task Manager</Header>
      <h6 className="card text-white bg-primary mb-3">FASTAPI - React - MongoDB</h6>
     <div className="card-body">
      <h5 className="card text-white bg-dark mb-3">Add Your Task</h5>
      <span className="card-text"> 
        <input className="mb-2 form-control titleIn" onChange={event => setTitle(event.target.value)} placeholder='Title'/> 
        <input className="mb-2 form-control desIn" onChange={event => setDesc(event.target.value)}   placeholder='Description'/>
      <button className="btn btn-outline-primary mx-2 mb-3" style={{'borderRadius':'50px',"font":"bold"}}  onClick={addTodoHandler}>Add Task</button>
      </span>
      <h5 className="card text-white bg-dark mb-3">Your Tasks</h5>
      <div >
      <TodoListView todoList={todoList} />
      </div>
      </div>
      <h6 className="card text-dark bg-warning py-1 mb-0" >Copyright 2021, All rights reserved &copy;</h6>
    {/* </div> */}
    </AppContainer>
    </>
  );
}

export default App;