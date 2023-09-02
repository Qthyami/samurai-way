import {combineReducers, createStore} from "redux";

import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./users-reducer";


export const rootReducer= combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sideBar:sidebarReducer,
    usersPage: usersReducer,



});
export type AppRootStateType = ReturnType<typeof rootReducer>
const store =createStore(rootReducer);
export default store