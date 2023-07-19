import React from 'react';
import Header from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import s from './App.module.css';
import {dialogsDataType, messagesDataType, postsData, postsDataType} from "./index";
type AppPropsType ={
    dialogsData:dialogsDataType[],
    messagesData:messagesDataType[]
    postsData:postsDataType[]
}
function App(props:AppPropsType) {
    return (
        <Router>
            <div className={s.appWrapper}>
                <Header />
                <Navbar />

                <div className={s.appWrapperContent}>
                    <Routes>
                        <Route path="/dialogs" element={<Dialogs data={props.dialogsData} posts={props.messagesData}/>} />
                        <Route path="/profile" element={<Profile posts={props.messagesData} postsData={postsData}/>} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
