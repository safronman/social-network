import React from 'react';
import styles from './Posts.module.css';
import Post from "./Post/Post";
import AddPost from "./AddPost/AddPost";
import PropTypes from "prop-types";

const Posts = (props) => {
    // debugger

    let posts = props.state.postsData.map(item => {
        return <Post key={item.id} message={item.message} likes={item.likes}/>
    });

    return (
        <div className={styles.postList}>
            <AddPost currentMessage={props.state.currentMessage}
                     addPostOnProfilePage={props.addPostOnProfilePage}
                     addCurrentMessageOnProfilePage={props.addCurrentMessageOnProfilePage}/>
            {posts}
        </div>
    );
};

Posts.propTypes = {
    state: PropTypes.shape({
        postsData: PropTypes.array,
        enableFullInfoBtn: PropTypes.bool,
    })
};

export default Posts;