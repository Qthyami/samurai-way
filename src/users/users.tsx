import React, from 'react';


import {mapDispatchToPropsType, mapStateToPropsType} from "./UsersContainer";
import s from "./users.module.css"
import axios from "axios";
import Billy from "../assets/images/Billy.webp"

type usersPropsType=mapStateToPropsType & mapDispatchToPropsType


export class Users extends React.Component<usersPropsType>  {
    constructor(props:usersPropsType) {
        super(props);
        this.onPagechanged = this.onPagechanged.bind(this);
    }
    componentDidMount() {
            {
                axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                    .then((res) => {

                       this. props.setUser(res.data.items);
                       this.props.setTotalUsersCount(res.data.totalCount)
                    })
            }

    }
   onPagechanged (pageNumber:number){
       this.props.setCurrentPage(pageNumber)
       axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
           .then((res) => {

               this. props.setUser(res.data.items)
           })

    }
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = [];
        for (let i=1; i<=pagesCount; i++){

            pages.push(i)
        }
        let curP = this.props.currentPage;
        let curPF = ((curP - 5) < 0) ?  0  : curP - 5 ;
        let curPL = curP + 5;
        let slicedPages = pages.slice( curPF, curPL);
    return   <div>
        <div>
            {slicedPages.map(p=>{
                return <span className={this.props.currentPage===p ? s.selectedPhoto : ""}
                onClick={(e)=>{this.onPagechanged(p)}}
                >{p},{" "}
                </span>
            })}
        </div>
        {
            this.props.users.map(u => <div key={u.id }>

                <span>

                    <div>
                        <img alt={"avatar"} src={u.photos.small===null? Billy :u.photos.small}  className={s.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
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
};

