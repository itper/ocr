import {applyMiddleware,compose,createStore} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import thunk from 'redux-thunk';
import makeRootReducer from './reducers';
export default (initialState={},history) => {
    const middleware = [thunk,routerMiddleware(history)];
    const enhancers = [];

    const store = createStore(
        makeRootReducer(),
    )
}