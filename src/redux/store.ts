import {v1} from "uuid";
import profileReducer, {addPostActionCreatorType, updateNewPostTextActionCreatorType} from "./profile-reducer";

import sidebarReducer from "./sidebarReducer";
import dialogsReducer, {sendMessageACType, updateNewMessageACType} from "./dialogsReducer";


export type ActionCreatorType  = addPostActionCreatorType | updateNewPostTextActionCreatorType | updateNewMessageACType | sendMessageACType

export type postType={id:string, message:string,likesCount:number }
export type dialogType = {id:number, name:string}

export type messageType= {id:number, message:string}
export type profilePageType = {
    posts: postType[];
    newPostText: string;
};
export type dialogsPageType = {
    dialogs: dialogType[];
    messages: messageType[];
    newMessageBody:string;
};

export type stateType = {
    profilePage: profilePageType;
    dialogsPage: dialogsPageType;
    sidebar: {};
};
export type StoreType = {
    _state: stateType;
    _callSubscriber: Function; // Изменено на тип Function
    getState:Function

    subscribe: (observer: (state: stateType) => void) => void;
    dispatch:(action:ActionCreatorType)=>void; // не уверен в правильности типизации
};

let store :StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: 'Hi, how are you?', likesCount: 12},
                {id: v1(), message: 'It\'s my first post', likesCount: 11},
                {id: v1(), message: 'Blabla', likesCount: 11},
                {id: v1(), message: 'Dada', likesCount: 11}
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        debugger;
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;  // observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}




// export default store;
// @ts-ignore
window.store = store;

