import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType ={
name:string;
id:number
}
const DialogItem=(props:DialogItemPropsType)=>{
    let path = "dialogs/" + props.id;
    return(
        <div className={s.dialog + " "+s.active}>
            <NavLink to={path}>{props.name}</NavLink>

        </div>

    )

}
type MessagePropsType = {
    message: string;

}
const Message= (props:MessagePropsType)=>{
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = () => {
    type dialogsDataType={
    id:number,
        name:string
    }
type messagesDataType={
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
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsData.map(el => {
                            return(
                                <DialogItem key={el.id} name={el.name} id={el.id} />
                            )
                        }
                    )
                    }




                </div>


            <div className={s.messages}>
                {messagesData.map(el=>{
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