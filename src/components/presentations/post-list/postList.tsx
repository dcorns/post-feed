/**
 * postList
 * Created by dcorns on 1/14/21
 * Copyright © 2021 Dale Corns
 */
import React from 'react';
import PostItem from '../post-item/PostItem';
import {Post} from '../../../redux/redux-types';
import {Accordion} from 'react-bootstrap';

const PostList = (props: any) => {
    let lastId = 0;
    const checkId = (id: number) => {
        if (id === lastId) return '';
        lastId = id;
        return `User ${id}`;
    }
    return (
        <div>
            <header>
                <h2>Posts</h2>
            </header>
            <div className={'list-group'}>
                {props.posts && props.posts.map((post: Post) => {
                    return (
                         <div key={post.id} className={'list-group-item list-group-item-action'}>
                            <PostItem post={post} postComments={props.comments[post.id]} user={checkId(post.userId)} onPostClick={props.onPostClick} onAddCommentClick={props.onAddCommentClick}/>
                         </div>
                    );
                })}
            </div>
        </div>
    );
}
export default PostList;