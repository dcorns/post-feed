/**
 * Posts
 * Created by dcorns on 1/14/21
 * Copyright © 2021 Dale Corns
 */
import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {Container} from 'react-bootstrap';
import PostList from '../../presentations/post-list/postList';
import {loadPosts} from '../../../redux/actions/postActions';
import {loadComments, setPostComments, addComment} from '../../../redux/actions/commentActions';
import {setSelectedPostId} from '../../../redux/actions/viewActions';
import {setSelectedUserId} from '../../../redux/actions/viewActions';
import {setNextCommentId} from '../../../redux/actions/commentActions';
import CommentAddModal from '../../presentations/comment-add/CommentAddModal';

// @ts-ignore
const Posts = ({posts, comments, loadPosts, loadComments, setPostComments, selectedPostId, setSelectedPostId, setSelectedUserId, addComment, setNextCommentId, nextCommentId}) => {

    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        if (!posts || posts.length === 0) {
            loadPosts()
                .catch((err: any) => {
                    alert(`Loading posts failed ${err}`);
                });
        }
        if (!comments || Object.keys(comments).length === 0) {
            loadComments()
                .catch((err: any) => {
                    alert(`Loading comments failed ${err}`);
                });
        }
    }, []);

    const closeModal = () => {
        setShowModal(false);
    };

    const saveComment = (commentToAdd: any) => {
        commentToAdd.postId = selectedPostId;
        commentToAdd.id = nextCommentId;
        const copyComments = JSON.parse(JSON.stringify(comments));
        copyComments[selectedPostId].push(commentToAdd);
        setPostComments(copyComments[selectedPostId]);
        addComment(copyComments);
        setNextCommentId(nextCommentId + 1);
        closeModal();
    };

    return (
        <div>
            <Container>
                <CommentAddModal show={showModal} onHide={closeModal}
                                 postId={selectedPostId} onCancelButtonClick={closeModal}
                                 onSaveButtonClick={saveComment}/>
                <PostList posts={posts} comments={comments} onPostClick={(postId: number, userId: number) => {
                    setPostComments(comments[postId]);
                    setSelectedPostId(postId);
                    setSelectedUserId(userId);
                }}
                          onAddCommentClick={(postId: number, userId: number) => {
                              setSelectedPostId(postId);
                              setSelectedUserId(userId);
                              setShowModal(true)
                          }}
                />
            </Container>

        </div>
    );

}

function mapStateToProps(state: any) {
    return {
        posts: state.posts,
        comments: state.comments.data,
        postComments: state.comments.postComments,
        selectedPostId: state.view.selectedPostId,
        selectedUserId: state.view.selectedUserId,
        nextCommentId: state.comments.nextCommentId
    };
}

const mapDispatchToProps = {
    loadPosts,
    loadComments,
    setPostComments,
    setSelectedPostId,
    setSelectedUserId,
    addComment,
    setNextCommentId
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Posts);
