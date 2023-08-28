import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionCreatorType,  profilePageType} from '../../redux/store';

type ProfilePropsType = {
    profilePage: profilePageType;

    dispatch:(action:ActionCreatorType)=>void;
};

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}

                dispatch={props.dispatch}

            />
        </div>
    );
};

export default Profile;
