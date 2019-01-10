import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.postItem}>
            <div className={s.postContent}>
                <img className={s.postAvatar}
                     src="https://en.opensuse.org/images/1/14/Button-filled-monochrome.png"
                     alt=""/>
                <p className={s.postDesc}>{props.message}</p>
            </div>
            <div className={s.postActions}>
                <div>like: {props.likes}</div>
            </div>
        </div>
    );
};

export default Post;