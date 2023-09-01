import {v1} from "uuid";
import {ActionCreatorType, profilePageType} from "./store";

let initialstate={
    posts: [
        {id: v1(), message: 'Hi, how are you?', likesCount: 12},
        {id: v1(), message: 'It\'s my first post', likesCount: 11},
        {id: v1(), message: 'Blabla', likesCount: 11},
        {id: v1(), message: 'Dada', likesCount: 11}
    ],
    newPostText: 'it-kamasutra.com'
}

const profileReducer = (state:profilePageType=initialstate, action:ActionCreatorType) => {
    switch(action.type) {
        case "ADD-POST":
            let newPost = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            };
            // state.posts.push(newPost);
            // state.newPostText = '';
            return {...state, posts:[newPost, ...state.posts],newPostText:""}
        case 'UPDATE-NEW-POST-TEXT':
            let newText = action.newText;
            return {...state, newPostText:newText}
        default:
            return state;
    }
}
export default profileReducer
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