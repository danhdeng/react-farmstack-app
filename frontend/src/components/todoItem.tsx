import React from 'react'
import styled from 'styled-components';
import tw from "twin.macro";
import { Button } from './CssContainer';
import {ITodo} from '../../typing/todo';
import axios from 'axios';

const ToDoItemContainer=styled.div`
    ${tw`
        w-full
        flex
        items-center
        justify-center
    `}
`;

const DescriptionContaier=styled.p`
    ${tw`
        text-xs
    `}
`;

const Title=styled.span`
    ${tw`
        font-bold
        underline
        pr-1
    `}
`;

interface ToDoItemProps {
  todo: ITodo
}


export default function TodoItem(props: ToDoItemProps) {
    const {title, description}=props.todo;

    const deletehandler=async(title:string)=>{
        await axios.delete(`http://localhost:8000/api/todo/${title}`)
            .then(res=>console.log(res.data));
    }
    return (
        <ToDoItemContainer>
            <Title>{title}:</Title>
            <DescriptionContaier>{description}</DescriptionContaier>
            <Button onClick={()=>deletehandler(title)}>Delete</Button>
        </ToDoItemContainer>
    )
}
