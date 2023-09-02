


export type initialStateType ={
    users:userType[]

}
export type userType={
    id:string,
    photoUrl:string,
    followed:boolean,
    fullname:string,
    status:string,
    location:userLocationType
}
export  type userLocationType={
    city:string,
    country:string
}
export type ActionCreatorUsersType=followACType| unfollowACType | setUsersACType
let initialstate:initialStateType={
    users: []
        // {id: v1(), followed:false, fullname: 'Dimych', status:"I`m a boss", location:{city:"Minsk", country:"Belarus"}},
        // {id: v1(), followed:true, fullname: 'Andrew', status:"I`m a boss too", location:{city:"Moscow", country:"Russia"}},
        // {id: v1(), followed:false, fullname: 'Sveta', status:"I`m a boss +1", location:{city:"Kiev", country:"Ukraine"}},


}
export const usersReducer = (state:initialStateType=initialstate, action:ActionCreatorUsersType): initialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state,users:state.users.map(u=>u.id===action.payload.userId? {...u, followed:true} : u)};
        case "UNFOLLOW":
            return {...state,users:state.users.map(u=>u.id===action.payload.userId? {...u, followed:false} : u)};
        case "SET-USERS":
            return {...state, users:[...state.users, ...action.payload.users]}
        default:
            return state;
    }
}
export default usersReducer;

export type followACType=ReturnType<typeof followAC>
export const followAC=(userId:string)=>{
    return{
        type:"FOLLOW",
        payload:{
            userId
        }


    }as const
}
export type unfollowACType=ReturnType<typeof unfollowAC>
export const unfollowAC=(userId:string)=>{
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