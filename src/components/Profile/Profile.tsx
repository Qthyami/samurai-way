import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {messagesDataType, postsDataType} from "../../redux/stateReducer";



type ProfilePropsType = {

    postsData:postsDataType[]
    addPost:(postMessage:string)=>void
}

export const Profile = (props:ProfilePropsType) => {
    const addPostCallback=(postMessage:string)=>{
        props.addPost(postMessage)
    }
    return (
        <div>
           <ProfileInfo/>
            <MyPosts postsData={props.postsData} addPostCallback={addPostCallback}/>

        </div>

    );
};

