import {connect} from "react-redux";
import {

     followTC, getFollowToStateAC, setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC, toggleIsFetchingAC,
    unfollowTC,
    userType
} from "../redux/users-reducer";
import loader from "../assets/images/tail-spin.svg"

import {AppRootStateType, AppThunkDispatch} from "../redux/redux-store";



import React from "react";

import {Users} from "./Users";
import { getUsersAPI} from "../api/api";


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
    getFollowToState:(userId: number, followStatus:boolean)=> void;
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
        // const IDsFetchedUsers: number[] = [];

        this.props.toggleIsFetching(true);
        getUsersAPI.get(this.props.currentPage, this.props.pageSize)
        // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {withCredentials: true})
            .then((res) => {
                this.props.setUser(res.data.items);
                this.props.setTotalUsersCount(res.data.totalCount);

                // res.data.items.forEach((el: userType) => {
                //     IDsFetchedUsers.push(el.id);
                // });
                //
                // const followPromises = IDsFetchedUsers.map((userId) =>
                //     followAPI.isFollowed(userId).then((res) => {
                //         this.props.getFollowToState(userId, res.data);
                //     })
                // );

                // Promise.all(followPromises).then(() => {
                //     this.props.toggleIsFetching(false);
                // });
            })
            .finally(()=>this.props.toggleIsFetching(false))
    }

    onPagechanged=(pageNumber: number)=> {
        // const IDsFetchedUsers: number[] = [];
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
         getUsersAPI.get(pageNumber, this.props.pageSize)

            .then((res) => {

                this.props.setUser(res.data.items)
                // res.data.items.forEach((el: userType) => {
                //     IDsFetchedUsers.push(el.id);
                // });
                // const followPromises = IDsFetchedUsers.map((userId) =>
                //     followAPI.isFollowed(userId).then((res) => {
                //         this.props.getFollowToState(userId, res.data);
                //     })
                // );
                //
                // Promise.all(followPromises).then(() => {
                //     this.props.toggleIsFetching(false);
                // });


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
                   getFollowToState={this.props.getFollowToState}

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
const mapDispatchToProps=(dispatch:AppThunkDispatch):mapDispatchToPropsType=>{
    return {
        follow: (userId:number) =>{
            dispatch(followTC(userId))
    },
        unfollow:(userId:number)=>{
            dispatch(unfollowTC(userId))
        },
        getFollowToState:(userId:number,followStatus:boolean)=>{
            dispatch(getFollowToStateAC(userId,followStatus))
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
