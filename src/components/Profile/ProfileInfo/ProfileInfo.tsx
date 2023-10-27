import React from 'react';
import s from './ProfileInfo.module.css';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";
import Billy from "../../../assets/images/Billy.webp"


const ProfileInfo = () => {
    const profile = useSelector((state: AppRootStateType) => state.profilePage.profile);

    return (
        <div>
            {profile && (
                <div>
                    <h1 className={s.descriptionBlock}>{profile.fullName}</h1>
                    {/*{profile.contacts && (*/}
                    {/*    <div>*/}
                    {/*        <div>Contacts:</div>*/}
                    {/*        <ul>*/}
                    {/*            {Object.keys(profile.contacts).map((key) => (*/}
                    {/*                <li key={key}>*/}
                    {/*                    {profile.contacts && (profile.contacts as ContactsUsersItemsType)[key]}*/}
                    {/*                </li>*/}
                    {/*            ))}*/}
                    {/*        </ul>*/}
                    {/*    </div>*/}
                    {/*)}*/}
                    {profile.photos && profile.photos.large ? (
                        <div>
                            <img src={profile.photos.large} alt="User Avatar" />
                        </div>

                    ) : <img alt="User Default Avatar" src={Billy}/> }
                    <div className={s.descriptionBlock}>
                        Looking for a job: {profile.lookingForAJob ? 'true' : 'false'}
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProfileInfo;

