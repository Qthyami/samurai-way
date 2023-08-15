import {v1} from "uuid";
// type ActionAddPost = {
//     type: 'ADD-POST';
// };
//
// type ActionUpdateNewPostText = {
//     type: 'UPDATE-NEW-POST-TEXT';
//     newText: string;
// };

export type ActionCreatorType  = addPostActionCreatorType | updateNewPostTextActionCreatorType ;

export type postType={id:string, message:string,likesCount:number }
type dialogType = {id:number, name:string}

type messageType= {id:number, message:string}
export type profilePageType = {
    posts: postType[];
    newPostText: string;
};
export type dialogsPageType = {
    dialogs: dialogType[];
    messages: messageType[];
};

export type stateType = {
    profilePage: profilePageType;
    dialogsPage: dialogsPageType;
    sidebar: {};
};
type StoreType = {
    _state: stateType;
    _callSubscriber: Function; // Изменено на тип Function
    getState:Function
    addPost: () => void;
    updateNewPostText: (newText: string) => void;
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
            ]
        },
        sidebar: {}
    },
    getState() {

        return this._state;
    },
    _callSubscriber: () => {
        console.log('State changed');
    },
    addPost() {
        let newPost = {
            id: v1(),
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);

        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText: string) {

        this._state.profilePage.newPostText = newText;


        this._callSubscriber(this._state);
        console.log(store._state.profilePage.newPostText)

    },
    subscribe(observer: (state: stateType) => void) {
        this._callSubscriber = observer;  // observer
    }
    ,

    dispatch(action:ActionCreatorType ) {
        if (action.type === "ADD-POST" ) {
            let newPost = {
                id: v1(),
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);

            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);

        }
    }
}
export type addPostActionCreatorType = ReturnType<typeof addPostActionCreator>
export const addPostActionCreator = () =>{
    return {
        type: "ADD-POST"
    } as const
}
export type updateNewPostTextActionCreatorType = ReturnType <typeof updateNewPostTextActionCreator>
export const updateNewPostTextActionCreator = (text:string)=>{
    return {
        type:'UPDATE-NEW-POST-TEXT',
        newText: text
    }as const
}


export default store;
// @ts-ignore
window.store = store;

