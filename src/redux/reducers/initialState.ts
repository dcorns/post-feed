/**
 * initialState
 * Created by dcorns on 1/16/21
 * Copyright © 2021 Dale Corns
 */
const state = {
    posts: [],
    comments: {
        data: {},
        postComments: [],
        nextCommentId: 0,
    },
    view: {
        selectedPostId: 0,
        selectedUserId: 0,
    }
}

export default state;