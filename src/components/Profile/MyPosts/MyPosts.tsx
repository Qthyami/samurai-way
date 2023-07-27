import React, { ChangeEvent,KeyboardEvent, useState } from 'react';
import s from './MyPosts.module.css';
import { Post } from './Post/Post';
import {postsDataType} from "../../../redux/stateReducer";

type MyPostsPropsType = {
    postsData: postsDataType[];
    addPostCallback:(postMessage:string)=>void
};

export const MyPosts = (props: MyPostsPropsType) => {
    const [text, setText] = useState<string>('');

    const handleTextArea = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value);
    };

    const addPost = () => {
       props.addPostCallback(text);
        setText("")

    };
    const onKeyDownHandler =(e: KeyboardEvent<HTMLInputElement>)=>{
        if (e.key==="Enter"){
            addPost()
        }
    }

    return (
        <div>
            <div className={s.postsBlock}>
                <h3>My posts</h3>
            </div>
            <div>
                {/* Используем input с типом text для однострочного ввода */}
                <input type="text" value={text}
                       placeholder="add Post"
                       onChange={handleTextArea}
                       onKeyDown={onKeyDownHandler}

                />
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {props.postsData.map((el) => {
                    return <Post key={el.id} message={el.message} likesCount={el.likesCount} />;
                })}
            </div>
        </div>
    );
};
