import React, {useState} from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';
import {Button, CardContainer} from './CssContainer';


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
    box-shadow: 0 1.3px 12px -3px rgba(0,0,0,0.4);
    ${tw`
        flex
        bg-white
        mx-auto 
        max-w-sm 
        shadow-lg 
        rounded-lg
    `}
`;

const Title=styled.h5`
    ${tw`
        flex
        text-white
        bg-black
        mb-3
    `}
`;

const InputContainer=styled.input`
    ${tw`
        shadow
        appearance-none 
        border 
        rounded 
        w-full 
        py-2 
        px-3 
        text-gray-700 
        leading-tight
        focus:outline-none
        focus:shadow-sm
    `}
    
`;

const Header=styled.h5`
    ${tw`
        text-white
        bg-black
        mb-3
    `}
`;

export default function AddTodoItem() {
    const [title, setTitle]=useState("");
    const [decription, setDesc]=useState("");
    
    return (
        <AddItemContainer>
            <CardContainer>
             <Header>Add Your Task</Header>
            <span className="card-text"> 
            <InputContainer onChange={event => setTitle(event.target.value)} placeholder='Title'/> 
            <InputContainer onChange={event => setDesc(event.target.value)}   placeholder='Description'/>
                <Button>Add Task</Button>
            </span>
        </CardContainer>
        </AddItemContainer>
    )
}
