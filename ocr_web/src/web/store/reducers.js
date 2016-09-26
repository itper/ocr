import {combineReducers} from 'redux';
import {routerReducer as router} from 'react-router-redux';
export const makeRootReducer = (asyncReducers)=>{
    return combineReducers({
        //router左右react组件,也需要有特定的reducer处理action.
        router,
        ...asyncReducers
    })
}
export const injectReducer = (store,{key,reducer})=>{
    store.asyncReducers[key] = reducer;
    store.replaceReducer(makeRootReducer(store.asyncReducers));
}
export default makeRootReducer;