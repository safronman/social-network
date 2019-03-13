import React from 'react';
import styles from './Posts.module.css';
import Post from "./Post/Post";
import PropTypes from "prop-types";
import AddPostContainer from "./AddPost/AddPostContainer";

const Posts = ({profilePage: {postsData}}) => {
    // debugger
    let posts = postsData.map(item => {
        return <Post key={item.id} message={item.message} likes={item.likes}/>
    });

    return (
        <div className={styles.postList}>
            <AddPostContainer/>
            {posts}
        </div>
    );
};

Posts.propTypes = {
    profilePage: PropTypes.shape({
        postsData: PropTypes.array
    })
};

export default Posts;