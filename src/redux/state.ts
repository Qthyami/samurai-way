import {stateReducer} from "./stateReducer";
import {combineReducers, createStore} from "redux";


export const rootReducer=combineReducers({
    state:stateReducer


})
export type AppRootStateType = ReturnType<typeof rootReducer>
export const store =createStore(rootReducer);

// @ts-ignore
window.store=store;
