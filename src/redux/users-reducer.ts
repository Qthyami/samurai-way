import {Dispatch} from "redux";
import {usersAPI} from "../api/api";


export type initialStateType ={
    users:userType[],
    pageSize:number,
    totalUsersCount:number,
    currentPage:number,
    isFetching:boolean,
    followingInProgress:number[]

}
export type userType = {
	name: string;
	id: number;
	photos: RootObjectPhotos;
	status?: string;
	followed: boolean;
}
export type RootObjectPhotos = {
	small?: string;
	large?: string;
}


export  type userLocationType={
    city:string,
    country:string
}
export type ActionCreatorUsersType=followACType|
    unfollowACType |
    setUsersACType |
    SetCurrentPageACType |
    setTotalUsersCountACType |
    toggleLoaderACType |
    toggleFollowingProgressACType


let initialstate:initialStateType={
    users: [],
        // {id: v1(), followed:false, fullname: 'Dimych', status:"I`m a boss", location:{city:"Minsk", country:"Belarus"}},
        // {id: v1(), followed:true, fullname: 'Andrew', status:"I`m a boss too", location:{city:"Moscow", country:"Russia"}},
        // {id: v1(), followed:false, fullname: 'Sveta', status:"I`m a boss +1", location:{city:"Kiev", country:"Ukraine"}},
    pageSize:15,
    totalUsersCount:200,
    currentPage: 1,
    isFetching: false,
    followingInProgress:[]

}
export const usersReducer = (state:initialStateType=initialstate, action:ActionCreatorUsersType): initialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state,users:state.users.map(u=>u.id===action.payload.userId? {...u, followed:true} : u)};
        case "UNFOLLOW":
            return {...state,users:state.users.map(u=>u.id===action.payload.userId? {...u, followed:false} : u)};
        case "SET-USERS":

            return {...state, users:action.payload.users};

        case "SET-CURRENT-PAGE":

            return {...state, currentPage:action.payload.currentPage}
        case "SET-TOTAL-USERS-COUNT":
            return {...state, totalUsersCount:action.payload.totalCount}
        case "TOGGLE-IS-FETCHING":{
            return {...state, isFetching:action.payload.isFetching}
        }
        case "TOGGLE-IS-FOLLOWING-PROGRESS":{

            return {...state, followingInProgress: action.isFetching?
                [...state.followingInProgress, action.userId] :
                state.followingInProgress.filter(id=>id!==action.userId)
            }
        }


        default: return state;
    }
}
export default usersReducer;

export type followACType=ReturnType<typeof followAC>
export const followAC=(userId:number)=>{
    return{
        type:"FOLLOW",
        payload:{
            userId
        }
    }as const
}
export type unfollowACType=ReturnType<typeof unfollowAC>
export const unfollowAC=(userId:number)=>{
    return {
        type:"UNFOLLOW",
        payload:{
            userId
        }
    }as const;
}
export type setUsersACType=ReturnType<typeof setUsersAC>
export const setUsersAC=(users:userType[])=>{
    return {
        type: "SET-USERS",
        payload:{
            users
        }
    }as const;
}
export type SetCurrentPageACType=ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC=(currentPage:number)=>{
    return {
        type:"SET-CURRENT-PAGE",
        payload:{
            currentPage:currentPage
        }
    }as const
}
export type setTotalUsersCountACType=ReturnType<typeof setTotalUsersCountAC>
export const setTotalUsersCountAC=(totalCount:number)=>{
    return {
        type:"SET-TOTAL-USERS-COUNT",
        payload:{
            totalCount:totalCount
        }
    }as const
}
export type toggleLoaderACType=ReturnType<typeof toggleIsFetchingAC>
export const toggleIsFetchingAC=(isFetching:boolean)=>{
    return {
        type:"TOGGLE-IS-FETCHING",
        payload:{
            isFetching
        }
    }as const
}
export type toggleFollowingProgressACType=ReturnType<typeof toggleFollowingProgressAC>
export const toggleFollowingProgressAC = (isFetching:boolean, userId:number)=>{
    return {
        type:"TOGGLE-IS-FOLLOWING-PROGRESS",
        isFetching,
        userId
    }as const
}
//TCs
export const followTC=(userId:number)=>{
    return (dispatch:Dispatch<ActionCreatorUsersType>)=> {
        dispatch(toggleFollowingProgressAC(true,userId ))

        usersAPI.follow(userId)
            .then((res)=>{
if (res.data.resultCode===0){
    dispatch( followAC(userId))
}
                dispatch(  toggleFollowingProgressAC(false,userId ))
            })
    }
}
export const unfollowTC=(userId:number)=>{
    return (dispatch:Dispatch<ActionCreatorUsersType>)=> {
       dispatch( toggleFollowingProgressAC(true,userId ))

        usersAPI.unfollow(userId)
            .then((res)=>{
                if (res.data.resultCode===0){
                    dispatch( unfollowAC(userId))
                }
                dispatch(toggleFollowingProgressAC(false, userId));
            })
    }
}