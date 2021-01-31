/**
 * commentReducer
 * Created by dcorns on 1/14/21
 * Copyright © 2021 Dale Corns
 */
import * as type from '../redux-types';
import initialState from "./initialState";
export default function commentReducer(state:any = initialState.comments, action: any){
    switch(action.type){
        case type.ADD_COMMENT:
            return {...state, data:action.comments};
        case type.LOAD_COMMENTS_SUCCESS:
            return action.comments;
        case type.SET_POST_COMMENTS:
            return {...state, postComments: action.postComments};
        case type.SET_NEXT_COMMENT_ID:
            return {...state, nextCommentId: action.id};
        default:
            return state;
    }
}