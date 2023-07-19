import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
export type dialogsDataType={
    id:number,
    name:string
}
export type messagesDataType={
    id:number,
    message:string,

}

let dialogsData: dialogsDataType[]= [
    {id:1, name:"Афанасий"},
    {id:2, name:"МикроПетрович"},
    {id:3, name:"Орджоникидзе"},
    {id:4, name:"Онотоле"}
]
let messagesData: messagesDataType[]= [
    {id:1, message:"Hi" },
    {id:2, message:"How much is your IQ?"},
    {id:3, message:"A?" },
    {id:4, message:"ШО" }
]
export type postsDataType={
    id:number,
    message:string,
    likesCount:number
}
export const postsData: postsDataType[]= [
    {id:1, message:"Privet, kak dela?",likesCount:1 },
    {id:2, message:"Kak pogoda AZAZA", likesCount:10}

]

ReactDOM.render(
    <App dialogsData={dialogsData} messagesData={messagesData} postsData ={postsData}  />,
  document.getElementById('root')
);
