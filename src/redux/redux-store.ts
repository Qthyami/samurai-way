import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from "redux";


import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./users-reducer";
import {profileReducer} from "./profile-reducer";
import {authReducer} from "./auth-reducer";
import thunk, {ThunkDispatch} from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";


export const rootReducer= combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sideBar:sidebarReducer,
    usersPage: usersReducer,
    isFetching: usersReducer,
    auth:authReducer



});
export type AppRootStateType = ReturnType<typeof rootReducer>
const store =legacy_createStore(rootReducer, applyMiddleware(thunk));
export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
export default store

// @ts-ignore
window.store=store