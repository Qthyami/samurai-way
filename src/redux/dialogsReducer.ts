
import {ActionCreatorType, dialogsPageType} from "./store";
import {v1} from "uuid";
let initialstate={
    dialogs: [
        {id: v1(), name: 'Dimych'},
        {id: v1(), name: 'Andrew'},
        {id: v1(), name: 'Sveta'},
        {id: v1(), name: 'Sasha'},
        {id: v1(), name: 'Viktor'},
        {id: v1(), name: 'Valera'}
    ],
    messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'How is your it-kamasutra?'},
        {id: v1(), message: 'Yo'},
        {id: v1(), message: 'Yo'},
        {id: v1(), message: 'Yo'}
    ],
    newMessageBody: ""
}
const dialogsReducer = (state:dialogsPageType=initialstate, action:ActionCreatorType) => {
    switch (action.type) {
        case "UPDATE_NEW_MESSAGE_BODY":
            // state.newMessageBody = action.body;
            return {...state,newMessageBody:action.body}
        case "SEND-MESSAGE":
            let body = state.newMessageBody;
            // state.newMessageBody = '';
            // state.messages.push({id: v1(), message: body});

            return {...state,messages:[ ...state.messages, {id: v1(), message: body}],newMessageBody: ""}
        default:
            return state;
    }
}
export default dialogsReducer
export type updateNewMessageACType=ReturnType<typeof updateNewMessageBodyAC>
export const updateNewMessageBodyAC=(body:string)=>{
    return{
        type:"UPDATE_NEW_MESSAGE_BODY",
        body:body
    }as const
}
export type sendMessageACType=ReturnType<typeof sendMessageAC>
export const sendMessageAC=()=>{
    return {
        type:"SEND-MESSAGE",

    }as const;
}