import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    dialogType, messageType,

    StoreType,

} from "../../redux/state";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";
type dialogsPropsType={
    store: StoreType
}
const Dialogs = (props:dialogsPropsType) => {

    let state = props.store.getState().dialogsPage;
    let dialogsElements = state.dialogs.map( (d: dialogType)  => <DialogItem name={d.name} id={d.id} />  );
    let messagesElements = state.messages.map( (m: messageType)  => <Message message={m.message}/> );
    let newMessageBody = state.newMessageBody;
    const onNewMessageChange=(e: React.ChangeEvent<HTMLTextAreaElement>)=>{
        let body= e.currentTarget.value;
        props.store.dispatch(updateNewMessageBodyAC(body))
    }

    const onSendMessageClick=()=>{
// @ts-ignore
        props.store.dispatch(sendMessageAC())
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
               <div>{ messagesElements }</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder={"Enter your message"}></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;