import React from 'react';
import styles from './Posts.module.css';
import Post from "./Post/Post";
import PropTypes from "prop-types";
import AddPostContainer from "./AddPost/AddPostContainer";

const Posts = (props) => {

    let posts = props.postsData.map(item => {
        return <Post key={item.id} message={item.message} likes={item.likes} avatar={props.avatar}/>
    });

    return (
        <div className={styles.postList}>
            <AddPostContainer/>
            {posts}
        </div>
    );
};

Posts.propTypes = {
    postsData: PropTypes.array,
    avatar: PropTypes.string
};

export default Posts;