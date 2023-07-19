import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {messagesDataType, postsDataType} from "../../index";



type ProfilePropsType = {
   posts: messagesDataType[],
    postsData:postsDataType[]
}
export const Profile = (props:ProfilePropsType) => {
    return (
        <div>
           <ProfileInfo/>
            <MyPosts postsData={props.postsData} />

        </div>

    );
};

