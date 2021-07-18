import styled from 'styled-components';
import tw from "twin.macro";

export const CardContainer=styled.div`
    min-height: 4.3em;
    box-shadow: 0 1.3px 12px -3px rgba(0,0,0,0.4);
    ${tw`flex items-center justify-center pt-1 pb-1 pl-2 pr-2 bg-white rounded-md md:pt-2 md:pb-2 md:pl-9 md:pr-9`};
`;

export const Button=styled.button`
    ${tw`pt-1
     pb-1
     pl-1
     pr-1
     m-1 
     text-sm 
     font-bold
     bg-blue-500
     text-white 
     transition-all 
     duration-200 
     ease-in-out 
     border-2 
     border-transparent 
     border-solid 
     rounded-md 
     outline-none 
     focus:outline-none`}
`;

export const Task=styled.h5`
${tw`
    flex
    flex-col
    bg-black
    text-white
    items-center
    justify-center
    rounded
    mb-3
    mt-1.5
`}
`;

