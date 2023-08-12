import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { postType, profilePageType } from '../../redux/state';

type ProfilePropsType = {
    profilePage: profilePageType;
    addPost: () => void;
    // newPostText: string;
    updateNewPostText: (text: string) => void;
};

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                updateNewPostText={props.updateNewPostText}
                addPost={props.addPost}
            />
        </div>
    );
};

export default Profile;
