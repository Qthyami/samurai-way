import {combineReducers, createStore} from "redux";


import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./users-reducer";
import {profileReducer} from "./profile-reducer";


export const rootReducer= combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sideBar:sidebarReducer,
    usersPage: usersReducer,
    isFetching: usersReducer



});
export type AppRootStateType = ReturnType<typeof rootReducer>
const store =createStore(rootReducer);
export default store

// @ts-ignore
window.store=store