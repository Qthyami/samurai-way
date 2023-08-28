
import {ActionCreatorType, dialogsPageType} from "./store";
let initialstate={
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ],
    newMessageBody: ""
}
const dialogsReducer = (state:dialogsPageType=initialstate, action:ActionCreatorType) => {
    switch (action.type) {
        case "UPDATE_NEW_MESSAGE_BODY":
            state.newMessageBody = action.body;
            return state;
        case "SEND-MESSAGE":
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state;
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