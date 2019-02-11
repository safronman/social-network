import React from 'react';
import styles from './Posts.module.css';
import Post from "./Post/Post";
import AddPost from "./AddPost/AddPost";
import PropTypes from "prop-types";

const Posts = ({profilePage: {postsData, currentMessage}, dispatch}) => {
    // debugger

    let posts = postsData.map(item => {
        return <Post key={item.id} message={item.message} likes={item.likes}/>
    });

    return (
        <div className={styles.postList}>
            <AddPost currentMessage={currentMessage} dispatch={dispatch}/>
            {posts}
        </div>
    );
};

Posts.propTypes = {
    dispatch: PropTypes.func,
    profilePage: PropTypes.shape({
        postsData: PropTypes.array,
        currentMessage: PropTypes.string
    })
};

export default Posts;