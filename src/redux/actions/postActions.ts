/**
 * postActions
 * Created by dcorns on 1/14/21
 * Copyright © 2021 Dale Corns
 */
import getApiData from '../../services/getApiData';
import {LOAD_POSTS_SUCCESS} from '../redux-types';

export function loadPosts(){
    return function (dispatch: any) {
        return getApiData('https://jsonplaceholder.typicode.com/posts')
            .then(posts => {
                dispatch({type: LOAD_POSTS_SUCCESS, posts});
            })
            .catch(err => {
                throw err;
            })
    }
}