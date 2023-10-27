
import {addPostActionCreatorType, updateNewPostTextActionCreatorType} from "./profile-reducer";


import  {sendMessageACType, updateNewMessageACType} from "./dialogsReducer";


export type ActionCreatorType  = addPostActionCreatorType | updateNewPostTextActionCreatorType | updateNewMessageACType | sendMessageACType

export type postType={id:string, message:string,likesCount:number }
export type dialogType = {id:string, name:string}

export type messageType= {id:string, message:string}
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

// let store :StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: v1(), message: 'Hi, how are you?', likesCount: 12},
//                 {id: v1(), message: 'It\'s my first post', likesCount: 11},
//                 {id: v1(), message: 'Blabla', likesCount: 11},
//                 {id: v1(), message: 'Dada', likesCount: 11}
//             ],
//             newPostText: 'it-kamasutra.com'
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: v1(), name: 'Dimych'},
//                 {id: v1(), name: 'Andrew'},
//                 {id: v1(), name: 'Sveta'},
//                 {id: v1(), name: 'Sasha'},
//                 {id: v1(), name: 'Viktor'},
//                 {id: v1(), name: 'Valera'}
//             ],
//             messages: [
//                 {id: v1(), message: 'Hi'},
//                 {id: v1(), message: 'How is your it-kamasutra?'},
//                 {id: v1(), message: 'Yo'},
//                 {id: v1(), message: 'Yo'},
//                 {id: v1(), message: 'Yo'}
//             ],
//             newMessageBody: ""
//         },
//         sidebar: {}
//     },
//     _callSubscriber() {
//         console.log('State changed');
//     },
//
//     getState() {
//
//         return this._state;
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;  // observer
//     },
//
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action);
//
//         this._callSubscriber(this._state);
//     }
// }
//
//
//
//
// // export default store;
// // @ts-ignore
// window.store = store;

