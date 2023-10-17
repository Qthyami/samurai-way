import {connect} from "react-redux";
import {

    followAC,
    setUsersAC,
    unfollowAC,
    userType
} from "../redux/users-reducer";

import {AppRootStateType} from "../redux/redux-store";
import Users from "./users";
import {Dispatch} from "redux";

export type mapStateToPropsType = {
    users: userType[]
}

const mapStateToProps=(state:AppRootStateType):mapStateToPropsType=>{
    debugger
    return{

        users: state.usersPage.users
    }
}

export type mapDispatchToPropsType={
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
    setUser: (users: userType[]) => void;
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
            debugger
            dispatch(setUsersAC(users))

        }

    }

}


const UsersContainer= connect (mapStateToProps, mapDispatchToProps) (Users);
export default UsersContainer