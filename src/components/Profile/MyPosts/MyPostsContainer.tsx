import React from 'react';
import {ActionCreatorType, stateType} from '../../../redux/store';

import {
    addPostActionCreator,
    updateNewPostTextActionCreator,
} from '../../../redux/profile-reducer';

import {connect} from "react-redux";

import MyPosts from "./MyPosts";


const mapStateToProps=(state:stateType)=>{
    return{
        posts:state.profilePage.posts,
        newPostText:state.profilePage.newPostText
    }
}
type DispatchType=(action:ActionCreatorType)=>void;
const mapDispatchToProps = (dispatch:DispatchType)=>{
   return{
       addPost: () => {
           dispatch(addPostActionCreator());
       },
       updateNewPostText : (text: string) => {
           dispatch(updateNewPostTextActionCreator(text));
       }
   }
}

const MyPostsContainer= connect(mapStateToProps,mapDispatchToProps) (MyPosts)
export default MyPostsContainer;
// const MyPostsContainer: React.FC<MyPostsContainerPropsType> = () => {
//     const storeContext = useContext(StoreContext);
//     if (!storeContext) {
//         // Обработка ситуации, когда контекст равен null
//         return null; // или другой код, если необходимо
//     }
//
//     const { store } = storeContext; // Деструктурируем объект из контекста
//
//     const state: stateType = store.getState();
//
//     const addPost = () => {
//         store.dispatch(addPostActionCreator());
//     };
//
//     const onPostChange = (text: string) => {
//         dispatch(updateNewPostTextActionCreator(text));
//     };
//
//     return (
//         <MyPosts
//             updateNewPostText={onPostChange}
//             addPost={addPost}
//             posts={state.profilePage.posts}
//             newPostText={state.profilePage.newPostText}
//         />
//     );
// };


