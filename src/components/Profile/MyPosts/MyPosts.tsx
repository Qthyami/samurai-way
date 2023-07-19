import React from 'react';
import s from './MyPosts.module.css'
import {messagesData, Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div >

            <div className={s.postsBlock}>
                <h3>My posts</h3>
            </div>
            <div>
                <textarea>add Post</textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {messagesData.map(el=>{
                    return(
                        <Post id={el.id} message={el.message}   likesCount={el.likesCount}/>
                    )
                })}

            </div>

        </div>

    );
};

