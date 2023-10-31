import {Dispatch} from "redux";
import {authAPI} from "../api/api";

export {};
type ActionType=SetAuthUserDataACType
export type authResponseType = {
    data: {
        id: number,
        email: string,
        login: string,


    },
    resultCode: number,
    messages:string[]
}

type InitialStateType = typeof initialState
const initialState={
    id:null as null|number,
    email:null as null|string,
    login:null as null|string,
    isAuth: false as boolean
}

export const authReducer = (state:InitialStateType=initialState, action:ActionType)=>{
    switch (action.type){
        case "AUTH/SET-USER-DATA":{

            return {...state,
                   ...action.data,
                isAuth: true

            }
        }

        default:
            return state


    }
}
type SetAuthUserDataACType =ReturnType<typeof setAuthUserDataAC>
export const setAuthUserDataAC=(id:number, email:string, login:string)=>{
    return {
        type:"AUTH/SET-USER-DATA",
        data: {
            id,
            email,
            login
        }
    } as const
}

export const  AuthMeTC =()=>{
    return (dispatch:Dispatch<ActionType>)=>{
        authAPI.me()
            .then((res)=>{
                if (res.data.resultCode===0){
                    let {id, login, email} = res.data.data;
                    dispatch(setAuthUserDataAC(id,email,login))

                }
            })
    }
}