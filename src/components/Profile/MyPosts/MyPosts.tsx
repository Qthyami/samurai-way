import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { postType} from '../../../redux/store';

type MyPostsPropsType = {
    posts: postType[];
    updateNewPostText: (text:string)=>void;
    addPost: ()=>void;
    newPostText: string;

};

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    let postsElements = props.posts.map((p) => (
        <Post key={p.id} message={p.message} likesCount={p.likesCount} />
    ));

    let onAddPost = () => {

        props.addPost()
    };

    let onPostChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;

        props.updateNewPostText(text);

    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>{postsElements}</div>
        </div>
    );
};

export default MyPosts;
