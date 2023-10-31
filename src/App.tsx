import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

import { Routes, Route } from 'react-router-dom';

import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from './users/UsersContainer';



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
                    <Route index element={<Profile />} /> {/* Дефолтный маршрут */}
                    <Route path='/dialogs' element={<DialogsContainer />} />
                    <Route
                        path='/profile/:userId?'
                        element={(
                            <Profile/>
                        )}
                    />

                    <Route path='/users' element={<UsersContainer/>} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
