/**
 * commentActions
 * Created by dcorns on 1/14/21
 * Copyright © 2021 Dale Corns
 */
import * as type from '../redux-types';
import getApiData from '../../services/getApiData';
import aryToObj from '../../services/aryToObj';

export function addComment(comments: any) {
    return {type: type.ADD_COMMENT, comments};
}

export function setNextCommentId(id: number) {
    return {type: type.SET_NEXT_COMMENT_ID, id};
}

export function loadComments(){
    return function (dispatch: any) {
        return getApiData('https://jsonplaceholder.typicode.com/comments')
            .then(commentsApi => {
                const nextCommentId = commentsApi.length + 1;
                const comments = {
                    nextCommentId,
                    data: aryToObj(commentsApi, 'postId')
                }
                dispatch({type: type.LOAD_COMMENTS_SUCCESS, comments});
            })
            .catch(err => {
                throw err;
            })
    }
}

export function setPostComments  (postComments: Array<any>) {
    return {
        type: type.SET_POST_COMMENTS,
        postComments
    };
}