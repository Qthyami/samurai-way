import React, {useReducer, useState} from 'react';
import Header from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import s from './App.module.css';
import {addPostsAC, stateReducer, stateType} from "./redux/stateReducer";

import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./redux/state";

function App() {


    // const [state, dispatch] = useReducer(stateReducer, initialState);
const state = useSelector<AppRootStateType, stateType>(state=>state.state)
    const dispatch = useDispatch();
    const handleAddPost = (postMessage: string) => {

        dispatch(addPostsAC(postMessage));

    };


    return (
        <Router>
            <div className={s.appWrapper}>
                <Header />
                <Navbar />

                <div className={s.appWrapperContent}>
                    <Routes>
                        <Route path="/dialogs" element={<Dialogs data={state.messagesPage.dialogs} posts={state.messagesPage.messages}/>} />
                        <Route path="/profile" element={<Profile  postsData={state.profilePage.posts} addPost={handleAddPost}/>} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
