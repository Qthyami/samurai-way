import React from 'react';
import './App.module.css';
import Header from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import s from "./App.module.css"


function App() {
    return (
        <Router>
            <div className={s.appWrapper}>
                <Header />
                <Navbar />

                <div className={s.appWrapperContent}>
                    <Switch>
                        <Route exact path='/dialogs' component={Dialogs} />
                        <Route path="/profile" component={Profile} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
