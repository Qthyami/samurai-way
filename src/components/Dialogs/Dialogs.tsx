import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {dialogsDataType, messagesDataType} from "../../index";

type DialogsPropsType={
    data: dialogsDataType[],
    posts: messagesDataType[]
}



const Dialogs = (props:DialogsPropsType) => {

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {props.data.map(el => {
                            return(
                                <DialogItem key={el.id} name={el.name} id={el.id} />
                            )
                        }
                    )
                    }




                </div>


            <div className={s.messages}>
                {props.posts.map(el=>{
                    return(
                        <Message key={el.id} message={el.message} />
                    )
                })}




            </div>
            </div>
        </div>
    );
};

export default Dialogs;