import React from 'react'
import TodoItem from './todoItem';
import {ITodo} from '../../typing/todo';
import styled from "styled-components";
import tw from "twin.macro"; 

interface ITodoListViewProps{
    todoList: ITodo[]
}

const TodoListContainer=styled.ul`
    ${tw`
        flex
        text-base
    `}
`;

export default function TodoListView(props:ITodoListViewProps) {
    return (
        <TodoListContainer>
            {
                props.todoList.map(item=> <TodoItem todo={item}/>) 
            }
            
        </TodoListContainer>
    )
}
