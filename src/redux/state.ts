import {rerenderEntireTree} from "../render";
export type postType={id:number, message:string,likesCount:number }
type dialogType = {id:number, name:string}
type messageType= {id:number, message:string}
export type stateType= {
    profilePage:{ posts:postType[] },
    dialogsPage:{dialogs:dialogType[],
                 messages:messageType[]

    },
    sidebar: {}

}
 export type profilePageType=typeof  state.profilePage
 export type dialogsPageType=typeof  state.dialogsPage


let state:stateType=  {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11},
            {id: 3, message: 'Blabla', likesCount: 11},
            {id: 4, message: 'Dada', likesCount: 11}
        ]
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
}


export let addPost = (postMessage: string) => {
    let newPostId = Math.max(...state.profilePage.posts.map(post => post.id)) + 1;

    let newPost = {
        id: newPostId,
        message: postMessage,
        likesCount: 0
    };
debugger
    const addedPostState = {
        ...state,
        profilePage: {
            ...state.profilePage,
            posts: [...state.profilePage.posts, newPost]
        }
    };

    rerenderEntireTree(addedPostState);
}


export default state;