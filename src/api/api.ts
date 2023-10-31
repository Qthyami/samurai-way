import axios from "axios";
import {authResponseType} from "../redux/auth-reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
});
export const getUsersAPI={
    get(page:number,pageSize:number, username?:string, friend?:string ){
        return instance.get(`users/?page=${page}&pageSize=${pageSize}&username=${username}&friend=${friend}`)
    }
}
export const authAPI = {
    me() {
        return instance.get<authResponseType>(`auth/me`)
    }
}

export const followAPI={
    follow(userId:number){
        return instance.post<followApiResponseType>(`/follow/${userId}`)
    },
    unfollow (userId:number){
        return instance.delete<followApiResponseType>(`/follow/${userId}`)
    },
    isFollowed (userId:number){
        return instance.get<boolean>(`/follow/${userId}`)
    }
}

type followApiResponseType={
    resultCode: number
    messages: string[],
    data: Object
}

