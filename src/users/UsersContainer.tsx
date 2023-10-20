import {connect} from "react-redux";
import {

    followAC, setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    userType
} from "../redux/users-reducer";

import {AppRootStateType} from "../redux/redux-store";

import {Dispatch} from "redux";
import {Users} from "./users";

export type mapStateToPropsType = {
    users: userType[],
    pageSize:number,
    totalUsersCount:number
    currentPage:number
}

const mapStateToProps=(state:AppRootStateType):mapStateToPropsType=>{

    return{

        users: state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage

    }
}

export type mapDispatchToPropsType={
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
    setUser: (users: userType[]) => void;
    setCurrentPage:(pageNumber:number)=> void;
    setTotalUsersCount: (totalCount:number)=>void;
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
        }

    }

}


const UsersContainer= connect (mapStateToProps, mapDispatchToProps) (Users);
export default UsersContainer