import React from 'react';
import s from './Post.module.css'
type postPropsType={
    id:number
    message:string
    likesCount: number
}

export const Post = (props:postPropsType) => {

    return (
        <div >


            <div className={s.item} >

                <img src={'https://icdn.lenta.ru/images/2021/09/15/18/20210915183555038/square_1280_125ceca6620766b9a6467fa3159615c9.jpg'}/>
                {props.message}
                <div>
                    <span>{props.likesCount} likes</span>
                </div>
            </div>

        </div>

    );
};

