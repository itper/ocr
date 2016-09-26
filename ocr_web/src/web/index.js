import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import {router} from  'react-router';
import {reactRouterRedux} from 'react-router-redux';
import store from './store/createStore';
import AppContainer from './containers/AppContainer';
require('./css/global.css');
require('./css/index.css');

const mountNode = document.getElementById('root');
let render = ()=>{
    const router = require('./routes/index').default(store);
    ReactDOM.render(
        <AppContainer store={store}/>,
        mountNode
    )
}