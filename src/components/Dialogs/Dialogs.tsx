import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    dialogsPageType,
    dialogType, messageType,

} from "../../redux/store";

type dialogsPropsType={

    updateNewMessageBody:(body:string)=>void;
    sendMessage:()=>void;
    dialogsPage:dialogsPageType;
}

const Dialogs = (props:dialogsPropsType) => {

    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map( (d: dialogType)  => <DialogItem name={d.name} id={d.id} />  );
    let messagesElements = state.messages.map( (m: messageType)  => <Message message={m.message}/> );
    let newMessageBody = state.newMessageBody;
    const onNewMessageChange=(e: React.ChangeEvent<HTMLTextAreaElement>)=>{
        let body= e.currentTarget.value;
        props.updateNewMessageBody(body)
    }

    const onSendMessageClick=()=>{

        props.sendMessage()
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