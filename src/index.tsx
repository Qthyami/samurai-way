import * as serviceWorker from './serviceWorker';
import store  from "./redux/redux-store";

import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import App from './App';

import {Provider} from "react-redux";




    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
            <App
                // addPost={store.addPost.bind(store)}
                // updateNewPostText={store.updateNewPostText.bind(store)}
            />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );






serviceWorker.unregister();