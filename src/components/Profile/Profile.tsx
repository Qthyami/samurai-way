import React, {useEffect} from 'react';


import ProfileInfo from './ProfileInfo/ProfileInfo';

import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setUserProfileAC} from "../../redux/profile-reducer";
import axios from "axios";
export type GetUsersResponseType = {
    userId: number,
    lookingForAJob: boolean |null,
    lookingForAJobDescription:string|null,
    fullName: string,
    contacts:ContactsUsersItemsType| null,
    photos?:GetUsersItemsPhotosType| null
}
export type GetUsersItemsPhotosType = {
    small: string|null;
    large: string|null;
}
export type ContactsUsersItemsType = {
    github: string|null,
    vk: string|null,
    facebook: string|null,
    instagram: string|null,
    twitter: string|null,
    website: string|null,
    youtube: string|null,
    mainLink: string|null
}


const Profile = () => {
    let userId = useParams<{ userId: string }>().userId;

    const dispatch = useDispatch();

    useEffect(() => {
        if (!userId) {
            userId = '2';
        }

        axios
            .get<GetUsersResponseType>(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((response) => {
                dispatch(setUserProfileAC(response.data));
            });
    }, [userId]);
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer

                // store={props.store}


            />
        </div>
    );
};

export default Profile;
