/**
 * viewReducer
 * Created by dcorns on 1/19/21
 * Copyright © 2021 Dale Corns
 */
import * as type from '../redux-types';
import initialState from './initialState';

export default function viewReducer(state: any = initialState.view, action: any) {
    switch (action.type) {
        case type.SET_SELECTED_POST_ID:
            return {...state, selectedPostId: action.postId};
        case type.SET_SELECTED_USER_ID:
            return {...state, selectedUserId: action.userId};
        default:
            return state;
    }
}