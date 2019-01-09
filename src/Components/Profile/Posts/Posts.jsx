import React, {Component} from 'react';
import s from './Posts.module.css';
import Post from "./Post/Post";

class Posts extends Component {

    render() {
        return (
            <div className={s.postList}>
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        );
    }
}

export default Posts;