import React from 'react';
import s from './Post.module.css';
type postPropsType = {
    message:string,
    likesCount:number
}
const Post = (props:postPropsType ) => {
  return (
    <div className={s.item}>
      <img src='https://memepedia.ru/wp-content/uploads/2018/03/496277.jpg' />
        { props.message }
          <div>
        <span>like</span> { props.likesCount }
      </div>
    </div>
  )
}

export default Post;