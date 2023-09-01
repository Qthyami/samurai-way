import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";
type dialogItemPropsType={
    name:string,
    id:string
}
const DialogItem = (props:dialogItemPropsType) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

export default DialogItem;