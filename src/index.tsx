import * as serviceWorker from './serviceWorker';
import store  from "./redux/redux-store";

import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import {stateType} from "./redux/store";


let rerenderEntireTree = (state: stateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}

                store={store}

                // addPost={store.addPost.bind(store)}
                // updateNewPostText={store.updateNewPostText.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(()=>{
        let state=store.getState();
        rerenderEntireTree(state)
    }
    );

serviceWorker.unregister();