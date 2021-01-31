/**
 * postReducer
 * Created by dcorns on 1/14/21
 * Copyright © 2021 Dale Corns
 */
import {Post, LOAD_POSTS_SUCCESS} from "../redux-types";
import initialState from "./initialState";
export default function postReducer(state:any = initialState.posts, action: any){
    switch (action.type) {
        case LOAD_POSTS_SUCCESS:
            return action.posts;
        default:
            return state;
    }
}