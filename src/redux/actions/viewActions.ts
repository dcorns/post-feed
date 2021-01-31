/**
 * viewActions
 * Created by dcorns on 1/19/21
 * Copyright © 2021 Dale Corns
 */
import * as type from '../redux-types';

export function setSelectedPostId(postId: number) {
    return {
        type: type.SET_SELECTED_POST_ID,
        postId
    }
}
export function setSelectedUserId(userId: number) {
    return {
        type: type.SET_SELECTED_USER_ID,
        userId
    }
}