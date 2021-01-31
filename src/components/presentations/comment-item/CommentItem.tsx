/**
 * CommentItem
 * Created by dcorns on 1/16/21
 * Copyright © 2021 Dale Corns
 */
import React from 'react';
const CommentItem = (props: any) => (
    <div className={'list-group-item'}>
        <div className={'list-group-item list-group-item-info'}>{props.comment.name}</div>
        <div>{props.comment.body}</div>
        <h6>{props.comment.email}</h6>
    </div>
);

export default CommentItem;