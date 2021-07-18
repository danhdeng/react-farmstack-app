import React from 'react'
import TodoItem from './todoItem';
import {ITodo} from '../../typing/todo';
import styled from "styled-components";
import tw from "twin.macro"; 

interface ITodoListViewProps{
    todoList: ITodo[]
}

const TodoListContainer=styled.div`
    position: relative;
    display: block;
    padding: .5rem 1rem;
    color: #212529;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid rgba(0,0,0,.125);
`;
const TodoList=styled.ul`
    ${tw`
        flex
        text-base
    `}
`;

export default function TodoListView(props:ITodoListViewProps) {
    return (
        <TodoListContainer>
            <ul>
            {
                props.todoList.map(item=><TodoItem todo={item} key={item.title} />) 
            }
            </ul>
        </TodoListContainer>
    )
}
