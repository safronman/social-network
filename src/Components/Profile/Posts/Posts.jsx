import React from 'react';
import styles from './Posts.module.css';
import Post from "./Post/Post";
import AddPost from "./AddPost/AddPost";
import PropTypes from "prop-types";

const Posts = ({profilePage:{postsData, currentMessage}, addPostOnProfilePage, addCurrentMessageOnProfilePage}) => {
    // debugger

    let posts = postsData.map(item => {
        return <Post key={item.id} message={item.message} likes={item.likes}/>
    });

    return (
        <div className={styles.postList}>
            <AddPost currentMessage={currentMessage}
                     addPostOnProfilePage={addPostOnProfilePage}
                     addCurrentMessageOnProfilePage={addCurrentMessageOnProfilePage}/>
            {posts}
        </div>
    );
};

Posts.propTypes = {
    addPostOnProfilePage:PropTypes.func,
    addCurrentMessageOnProfilePage:PropTypes.func,
    profilePage: PropTypes.shape({
        postsData: PropTypes.array,
        currentMessage: PropTypes.string
    })
};

export default Posts;