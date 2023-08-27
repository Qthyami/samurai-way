import {v1} from "uuid";
import {ActionCreatorType, profilePageType} from "./state";

const profileReducer = (state:profilePageType, action:ActionCreatorType) => {
    switch(action.type) {
        case "ADD-POST":
            let newPost = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText;
            return state;
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