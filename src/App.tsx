import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

import { Routes, Route } from 'react-router-dom';

import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from './users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer.jsx';



// type AppPropsType = {
//     state:stateType
//     store:StoreType;
//
//
// };

const App = () => {

    // @ts-ignore
    return (

        <div className='app-wrapper'>

            <Header />
            <Navbar />
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs' element={<DialogsContainer />} />
                    <Route
                        path='/profile'
                        element={(
                            <ProfileContainer/>
                        )}
                    />

                    <Route path='/users' element={<UsersContainer/>} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
