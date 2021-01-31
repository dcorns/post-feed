/**
 * redux-types
 * Created by dcorns on 1/14/21
 * Copyright © 2021 Dale Corns
 */
export type PostComment = {
    postId: number
    id: number
    name: string
    email: string
    body: string
}

export type Post = {
    userId: number
    id: number
    title: string
    body: string
}

//action types
export const ADD_COMMENT = 'ADD_COMMENT';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
export const SET_POST_COMMENTS = 'SET_POST_COMMENTS';
export const SET_SELECTED_POST_ID = 'SET_SELECTED_POST_ID';
export const SET_SELECTED_USER_ID = 'SET_SELECTED_USER_ID';
export const SET_NEXT_COMMENT_ID = 'SET_NEXT_COMMENT_ID';