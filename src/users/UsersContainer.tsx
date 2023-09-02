import {connect} from "react-redux";
import {

    followAC,
    initialStateType,
    setUsersAC,
    unfollowAC,
    userType
} from "../redux/users-reducer";

import {AppRootStateType} from "../redux/redux-store";
import Users from "./users";
import {Dispatch} from "redux";

export type mapStateToPropsType = {
    users: initialStateType
}

const mapStateToProps=(state:AppRootStateType):mapStateToPropsType=>{
    return{
        users: state.usersPage.users
    }
}

export type mapDispatchToPropsType={
    follow: (userId: string) => void;
    unfollow: (userId: string) => void;
    setUser: (users: userType[]) => void;
}
// type DispatchType=(action:ActionCreatorUsersType)=>void;
const mapDispatchToProps=(dispatch:Dispatch):mapDispatchToPropsType=>{
    return {
        follow: (userId:string) =>{
            dispatch(followAC(userId))
    },
        unfollow:(userId:string)=>{
            dispatch(unfollowAC(userId))
        },
        setUser:(users:userType[])=>{
            dispatch(setUsersAC(users))
        }

    }

}


const UsersContainer= connect (mapStateToProps, mapDispatchToProps) (Users);
export default UsersContainer