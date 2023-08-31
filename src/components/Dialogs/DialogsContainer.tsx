import React from 'react';


import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

import {connect} from "react-redux";
import {ActionCreatorType, stateType} from "../../redux/store";


const mapStateToProps=(state:stateType)=>{
    return{
        dialogsPage:state.dialogsPage
    }
}
type DispatchType=(action:ActionCreatorType)=>void;
const mapDispatchToProps=(dispatch:DispatchType)=>{
    return{
        updateNewMessageBody:(body:string)=>{
            dispatch(updateNewMessageBodyAC(body))
        },
        sendMessage:()=>{
            dispatch(sendMessageAC())
        }
    }
}
const DialogsContainer=connect(mapStateToProps,mapDispatchToProps) (Dialogs)
export default DialogsContainer;