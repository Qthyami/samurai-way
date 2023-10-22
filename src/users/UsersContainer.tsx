import {connect} from "react-redux";
import {

    followAC, setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC, toggleIsFetchingAC,
    unfollowAC,
    userType
} from "../redux/users-reducer";
import loader from "../assets/images/tail-spin.svg"

import {AppRootStateType} from "../redux/redux-store";

import {Dispatch} from "redux";

import React from "react";
import axios from "axios";
import {Users} from "./Users";


export type mapStateToPropsType = {
    users: userType[],
    pageSize:number,
    totalUsersCount:number,
    currentPage:number,
    isFetching:boolean
}
export type mapDispatchToPropsType={
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
    setUser: (users: userType[]) => void;
    setCurrentPage:(pageNumber:number)=> void;
    setTotalUsersCount: (totalCount:number)=>void;
    toggleIsFetching:(isFetching:boolean)=>void;


}
export type usersPropsType=mapStateToPropsType & mapDispatchToPropsType


export class UsersContainer extends React.Component<usersPropsType> {
    constructor(props: usersPropsType) {
        super(props);
        this.onPagechanged = this.onPagechanged.bind(this);
    }

    componentDidMount() {
        {


            this.props.toggleIsFetching(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then((res) => {

                    this.props.setUser(res.data.items);
                    this.props.setTotalUsersCount(res.data.totalCount)



                })
                .finally(()=>this.props.toggleIsFetching(false))
        }

    }

    onPagechanged=(pageNumber: number)=> {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((res) => {

                this.props.setUser(res.data.items)

            })
            .finally(()=>this.props.toggleIsFetching(false))

    }

    render() {
        return <>
            {this.props.isFetching? <img src={loader} alt="loading" style={{width:"100px"}}/>   :  null }
            <Users users={this.props.users}
                   pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   setUser={this.props.setUser}
                   setCurrentPage={this.props.setCurrentPage}
                   setTotalUsersCount={this.props.setTotalUsersCount}
                   onPagechanged={this.onPagechanged}
                   isFetching={this.props.isFetching}
                   toggleIsFetching={this.props.toggleIsFetching}

            />

        </>
    };
}
const mapStateToProps=(state:AppRootStateType)=>{

    return{

        users: state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching
    }
}


// type DispatchType=(action:ActionCreatorUsersType)=>void;
const mapDispatchToProps=(dispatch:Dispatch):mapDispatchToPropsType=>{
    return {
        follow: (userId:number) =>{
            dispatch(followAC(userId))
    },
        unfollow:(userId:number)=>{
            dispatch(unfollowAC(userId))
        },
        setUser:(users:userType[])=>{

            dispatch(setUsersAC(users))

        },
        setCurrentPage:(pageNumber:number)=>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount:number)=>{
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching: (isFetching:boolean)=>{
            dispatch(toggleIsFetchingAC(isFetching))
    }


    }

}


export default  connect (mapStateToProps, mapDispatchToProps) (UsersContainer);
