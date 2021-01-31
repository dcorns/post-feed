/**
 * configureStore
 * Created by dcorns on 1/14/21
 * Copyright © 2021 Dale Corns
 */
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export default function configureStore(initialState?: any){
    // @ts-ignore
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunk, reduxImmutableStateInvariant()))
        );
}