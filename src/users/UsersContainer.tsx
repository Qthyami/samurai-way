import {connect} from "react-redux";
import {

    followTC, setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC, toggleFollowingProgressAC, toggleIsFetchingAC,
    unfollowTC,
    userType
} from "../redux/users-reducer";
import loader from "../assets/images/tail-spin.svg"

import {AppRootStateType, AppThunkDispatch} from "../redux/redux-store";

import React from "react";

import {Users} from "./Users";
import { usersAPI} from "../api/api";


export type mapStateToPropsType = {
    users: userType[],
    pageSize:number,
    totalUsersCount:number,
    currentPage:number,
    isFetching:boolean,
    followingInProgress:number[]
}
export type mapDispatchToPropsType={
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;

    setUser: (users: userType[]) => void;
    setCurrentPage:(pageNumber:number)=> void;
    setTotalUsersCount: (totalCount:number)=>void;
    toggleIsFetching:(isFetching:boolean)=>void;
    toggleFollowingProgress: (isFetching:boolean, userId:number)=>void



}
export type usersPropsType=mapStateToPropsType & mapDispatchToPropsType


export class UsersContainer extends React.Component<usersPropsType> {
    constructor(props: usersPropsType) {
        super(props);
        this.onPagechanged = this.onPagechanged.bind(this);
    }

    componentDidMount() {

        this.props.toggleIsFetching(true);
        usersAPI.get(this.props.currentPage, this.props.pageSize)

            .then((res) => {
                this.props.setUser(res.data.items);
                this.props.setTotalUsersCount(res.data.totalCount);

            })
            .finally(()=>this.props.toggleIsFetching(false))
    }

    onPagechanged=(pageNumber: number)=> {

        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
         usersAPI.get(pageNumber, this.props.pageSize)

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
                   followingInProgress={this.props.followingInProgress}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}


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
        isFetching:state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress
    }
}


// type DispatchType=(action:ActionCreatorUsersType)=>void;
const mapDispatchToProps=(dispatch:AppThunkDispatch):mapDispatchToPropsType=>{
    return {
        follow: (userId:number) =>{
            dispatch(followTC(userId))
    },
        unfollow:(userId:number)=>{
            dispatch(unfollowTC(userId))
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
    },
        toggleFollowingProgress: (isFetching:boolean, userId:number)=>{
            dispatch(toggleFollowingProgressAC(isFetching,userId))
        }


    }

}


export default  connect (mapStateToProps, mapDispatchToProps) (UsersContainer);
