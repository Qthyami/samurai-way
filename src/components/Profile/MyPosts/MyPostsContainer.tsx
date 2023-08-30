import React, { useContext } from 'react';
import { stateType } from '../../../redux/store';
import MyPosts from './MyPosts';
import {
    addPostActionCreator,
    updateNewPostTextActionCreator,
} from '../../../redux/profile-reducer';
import { StoreContext } from '../../../redux/StoreContext';

type MyPostsContainerPropsType = {};

const MyPostsContainer: React.FC<MyPostsContainerPropsType> = () => {
    const storeContext = useContext(StoreContext);
    if (!storeContext) {
        // Обработка ситуации, когда контекст равен null
        return null; // или другой код, если необходимо
    }

    const { store } = storeContext; // Деструктурируем объект из контекста

    const state: stateType = store.getState();

    const addPost = () => {
        store.dispatch(addPostActionCreator());
    };

    const onPostChange = (text: string) => {
        store.dispatch(updateNewPostTextActionCreator(text));
    };

    return (
        <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
        />
    );
};

export default MyPostsContainer;
