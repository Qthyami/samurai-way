import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Routes, Route } from 'react-router-dom';
import {ActionCreatorType, stateType, StoreType} from './redux/store';

type AppPropsType = {
    state: stateType;
    store:StoreType;
    
    dispatch:(action:ActionCreatorType)=>void;
};

const App: React.FC<AppPropsType> = (props) => {
    return (
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs' element={<Dialogs store={props.store} />} />
                    <Route
                        path='/profile'
                        element={(
                            <Profile
                                profilePage={props.state.profilePage}
                              dispatch={props.dispatch}

                            />
                        )}
                    />
                </Routes>
            </div>
        </div>
    );
};

export default App;
