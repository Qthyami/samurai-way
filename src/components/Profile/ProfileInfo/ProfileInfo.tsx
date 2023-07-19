import React from 'react';
import {MyPosts} from "../MyPosts/MyPosts";
import s from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div >
            <div><img
                src="https://upload.wikimedia.org/wikipedia/ru/0/02/%D0%93%D0%B0%D1%87%D0%B8%D0%BC%D1%83%D1%87%D0%B8.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>


        </div>
    );
};

export default ProfileInfo;