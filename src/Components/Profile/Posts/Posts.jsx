import React from 'react';
import s from './Posts.module.css';
import Post from "./Post/Post";
import AddPost from "./AddPost/AddPost";

const Posts = (props) => {
    // debugger
    return (
        <div className={s.postList}>
            <AddPost addPost={props.addPost}
                     changeWritingMessage={props.changeWritingMessage}/>
            {
                props.state.postsData.map(item => {
                    return <Post key={item.id} message={item.message} likes={item.likes}/>
                })
            }
        </div>
    );
};

export default Posts;