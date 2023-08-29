import React from 'react';

import {StoreType} from "../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

type dialogsPropsType = {
    store: StoreType
}
const DialogsContainer = (props: dialogsPropsType) => {

    let state = props.store.getState().dialogsPage;

    const onNewMessageChange = (body: string) => {

        props.store.dispatch(updateNewMessageBodyAC(body))

    }

    const onSendMessageClick = () => {

        props.store.dispatch(sendMessageAC())
    }
    return (
        <Dialogs dialogsPage={state} updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}/>
    )
}

export default DialogsContainer;