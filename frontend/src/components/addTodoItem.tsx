import React, {useState} from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';
import {Button, CardContainer, Task} from './CssContainer';


// position: relative;
// display: -webkit-box;
// display: -webkit-flex;
// display: -ms-flexbox;
// display: flex;
// -webkit-box-orient: vertical;
// -webkit-box-direction: normal;
// -webkit-flex-direction: column;
// -ms-flex-direction: column;
// flex-direction: column;
// background-color: #fff;
// border: 1px solid rgba(0,0,0,.125);
// border-radius: .25rem;


const AddItemContainer=styled.div`
    ${tw`
        flex
        flex-col
    `}
`;

const CardText=styled.span`
    //position: relative;
    //display: block;
    //padding: .5rem 1rem;
    color: #212529;
    text-decoration: none;
    //background-color: #fff;
    ${tw`
        flex
        flex-col
        items-center
        justify-center
        w-full
    `}
`;


const InputContainer=styled.input`
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    appearance: none;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    margin-bottom: 0.25rem;
    /* ${tw`
        flex
        flex-col
        shadow
        appearance-none 
        border 
        rounded 
        w-full 
        text-gray-700 
        leading-tight
        focus:outline-none
        focus:shadow-sm
        mb-3
    `}
     */
`;


export default function AddTodoItem() {
    const [title, setTitle]=useState("");
    const [description, setDesc]=useState("");
    
    return (
        <AddItemContainer>
            <CardText> 
            <InputContainer value={title} onChange={event => setTitle(event.target.value)} placeholder='Title'/> 
            <InputContainer value={description} onChange={event => setDesc(event.target.value)}   placeholder='Description'/>
                <Button>Add Task</Button>
            </CardText>
        </AddItemContainer>
    )
}
