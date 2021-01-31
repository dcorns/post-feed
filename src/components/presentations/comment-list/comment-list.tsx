/**
 * comment-list
 * Created by dcorns on 1/16/21
 * Copyright © 2021 Dale Corns
 */
import React from 'react';
import CommentItem from '../comment-item/CommentItem';
import {PostComment} from '../../../redux/redux-types';

const CommentList = (props: any) => (
        <div className={'list-group'}>
            {props.comments.map((comment: PostComment) => {
                return (
                    <div key={comment.id}>
                        <CommentItem comment={comment}/>
                    </div>
                );
            })}
        </div>
);

export default CommentList;