import {combineReducers, createStore} from "redux";
import {StoreType} from "./store";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";


let reducers= combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sideBar:sidebarReducer


});
let store:StoreType =createStore(reducers);
export default store