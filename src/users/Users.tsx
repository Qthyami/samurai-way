import React from 'react';

import s from "./users.module.css";
import Billy from "../assets/images/Billy.webp";
import {usersPropsType} from "./UsersContainer";
import {Link} from "react-router-dom";


export const Users = (props:usersPropsType & {onPagechanged:(p:number)=>void} ) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i=1; i<=pagesCount; i++){

        pages.push(i)
    }
    let curP = props.currentPage;
    let curPF = ((curP - 5) < 0) ?  0  : curP - 5 ;
    let curPL = curP + 5;
    let slicedPages = pages.slice( curPF, curPL);

    return   <div>

        <div>
            {slicedPages.map((p, indx)=>{
                return <span key={indx} className={props.currentPage===p ? s.selectedPhoto : ""}
                             onClick={(e)=>{props.onPagechanged(p)}}
                >{p},{" "}
                </span>
            })

            }
        </div>
        {
            props.users.map(u => <div key={u.id }>

                <span>

                    <div>
                        <Link to={"/profile/"+ u.id}>
                        <img alt={"avatar"} src={u.photos.small===null? Billy :u.photos.small}  className={s.userPhoto}/>
                            </Link>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}


