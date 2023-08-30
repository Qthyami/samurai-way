import React, {useContext} from 'react';


import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {StoreContext} from "../../redux/StoreContext";

// type dialogsPropsType = {
//     store: StoreType
// }
const DialogsContainer = () => {
    const storeContext = useContext(StoreContext);
    if (!storeContext) {
        // Обработка ситуации, когда контекст равен null
        return null; // или другой код, если необходимо
    }
    const { store } = storeContext;
    let state = store.getState().dialogsPage;

    const onNewMessageChange = (body: string) => {

        store.dispatch(updateNewMessageBodyAC(body))

    }

    const onSendMessageClick = () => {

        store.dispatch(sendMessageAC())
    }
    return (
        <Dialogs dialogsPage={state} updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}/>
    )
}

export default DialogsContainer;