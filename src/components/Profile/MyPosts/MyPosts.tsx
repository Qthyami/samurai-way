import React, { useState, useRef } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { postType } from '../../../redux/state';

type MyPostsPropsType = {
    posts: postType[];
    addPost: (text: string) => void;
};

const MyPosts: React.FC<MyPostsPropsType> = ({ posts, addPost }) => {
    const [newPostText, setNewPostText] = useState<string>('');

    const postsElements = posts.map(p => (
        <Post key={p.id} message={p.message} likesCount={p.likesCount} />
    ));

    const newPostElement = useRef<HTMLTextAreaElement | null>(null);

    const onPostChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewPostText(e.target.value);
    };

    const onAddPostClick = () => {
        if (newPostText.trim() !== '') {
            addPost(newPostText);
            setNewPostText('');
        }
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        ref={newPostElement}
                        value={newPostText}
                        onChange={onPostChange}
                    />
                </div>
                <div>
                    <button onClick={onAddPostClick}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>{postsElements}</div>
        </div>
    );
};

export default MyPosts;
