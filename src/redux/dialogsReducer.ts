
import {ActionCreatorType, dialogsPageType} from "./state";

const dialogsReducer = (state:dialogsPageType, action:ActionCreatorType) => {
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