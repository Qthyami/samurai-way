import React, {useEffect} from 'react';


import {mapDispatchToPropsType, mapStateToPropsType} from "./UsersContainer";
import s from "./users.module.css"
import axios from "axios";
import Billy from "../assets/images/Billy.webp"

type usersPropsType=mapStateToPropsType & mapDispatchToPropsType


const Users = (props:usersPropsType) => {

useEffect(()=>{
    if (props.users.length ===0) {
        {
            axios.get("https://social-network.samuraijs.com/api/1.0//users")
                .then((res) => {
                    debugger
                    props.setUser(res.data.items)
                })
        }
    }
},[])

        // props.setUser([
        //         // {
        //         //     id: v1(),
        //         //     photoUrl: 'https://yt3.googleusercontent.com/cPAh5pIs7oIih7s2s61z3M656RAXgvE1jZPMU9RcGIWGHUeycEHM3yKPzLmYjj3ziy5CpAEdxw=s900-c-k-c0x00ffffff-no-rj',
        //         //     followed: false,
        //         //     fullname: 'Dmitry',
        //         //     status: 'I am a boss',
        //         //     location: {city: 'Minsk', country: 'Belarus'}
        //         // },
        //         // {
        //         //     id: v1(),
        //         //     photoUrl: 'https://uznayvse.ru/images/catalog/2022/3/sasha-grey_71.jpg',
        //         //     followed: true,
        //         //     fullname: 'Sasha',
        //         //     status: 'I am a boss too',
        //         //     location: {city: 'Moscow', country: 'Russia'}
        //         // },
        //         // {
        //         //     id: v1(),
        //         //     photoUrl: 'https://images.mubicdn.net/images/cast_member/332867/cache-209837-1489990521/image-w856.jpg?size=800x',
        //         //     followed: false,
        //         //     fullname: 'Billy',
        //         //     status: 'I am a boss too',
        //         //     location: {city: 'Kiev', country: 'Ukraine'}
        //         // }
        //     ]
    //     )
    // }


    return   <div>
        {
            props.users.map(u => <div key={u.id }>

                <span>

                    <div>
                        <img alt={"avatar"} src={u.photos.small===null? Billy :u.photos.small}  className={s.userPhoto}/>
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
};

export default Users;