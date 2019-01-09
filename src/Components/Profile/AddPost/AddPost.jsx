import React, {Component} from 'react';
import s from './AddPost.module.css';

class AddPost extends Component {
    render() {
        return (
            <div className={s.newPost}>
                <h2>My posts</h2>
                <textarea className={s.newPostTextarea}>Add text</textarea>
                <button className={s.newPostBtn}>Send</button>
            </div>
        );
    }
}

export default AddPost;