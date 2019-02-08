import React from 'react';
import styles from './Posts.module.css';
import Post from "./Post/Post";
import AddPost from "./AddPost/AddPost";
import PropTypes from "prop-types";

const Posts = ({profilePage: {postsData, currentMessage}, addCurrentMessageToProfilePage, addPostToProfilePage}) => {
    // debugger

    let posts = postsData.map(item => {
        return <Post key={item.id} message={item.message} likes={item.likes}/>
    });

    return (
        <div className={styles.postList}>
            <AddPost currentMessage={currentMessage}
                     addCurrentMessageToProfilePage={addCurrentMessageToProfilePage}
                     addPostToProfilePage={addPostToProfilePage}/>
            {posts}
        </div>
    );
};

Posts.propTypes = {
    addPostOnProfilePage: PropTypes.func,
    addCurrentMessageOnProfilePage: PropTypes.func,
    profilePage: PropTypes.shape({
        postsData: PropTypes.array,
        currentMessage: PropTypes.string
    })
};

export default Posts;