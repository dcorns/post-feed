/**
 * index
 * Created by dcorns on 1/14/21
 * Copyright © 2021 Dale Corns
 */
import {combineReducers} from 'redux';
import comments from './commentReducer';
import posts from './postReducer';
import view from './viewReducer';

const rootReducer = combineReducers({
    posts,
    comments,
    view
});

export default rootReducer;