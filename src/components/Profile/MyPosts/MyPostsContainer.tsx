import React from 'react';

import {stateType, StoreType} from '../../../redux/store';
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

type MyPostsPropsType = {
    store:StoreType

};

const MyPostsContainer: React.FC<MyPostsPropsType> = (props) => {
    let state : stateType= props.store.getState();
    const addPost = () => {

        props.store.dispatch(addPostActionCreator())
    };

    const onPostChange = (text:string) => {


        props.store.dispatch(updateNewPostTextActionCreator(text));

    };

    return (
        <MyPosts updateNewPostText = {onPostChange} addPost={addPost}  posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>
    );
};

export default MyPostsContainer;
