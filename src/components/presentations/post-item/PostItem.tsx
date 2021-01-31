/**
 * PostItem
 * Created by dcorns on 1/14/21
 * Copyright © 2021 Dale Corns
 */

import React, {useState} from 'react';
import CommentList from '../comment-list/comment-list';

const PostItem = (props: any) => {
    const [showComments, setShowComments] = useState(false);
    return (
        <div>
            <div className={'badge badge-secondary'}>{props.user}</div>
            <div>
                <button onClick={() => {
                    setShowComments(!showComments);
                    props.onPostClick(props.post.id, props.post.userId);
                }}>
                    <h4 className={`list-group-item list-group-item-primary title`}>{props.post.title}</h4>
                    <div>{props.post.body}</div>
                </button>
                {showComments &&
                <div>
                    <div>
                      <button className={'btn btn-primary'} onClick={() => {
                          props.onAddCommentClick(props.post.id, props.post.userId);
                      }}>ADD COMMENT
                      </button>
                      <button className={'btn btn-warning'} onClick={() => {
                          setShowComments(false);
                      }}>CLOSE COMMENTS
                      </button>
                    </div>
                  <CommentList comments={props.postComments || []}/>
                </div>}
            </div>
        </div>
    );
}

export default PostItem;