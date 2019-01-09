import React, {Component} from 'react';
import s from './Post.module.css';

class Post extends Component {

    render() {
        return (
            <div className={s.postItem}>
                <img className={s.postAvatar} src="https://okeygeek.ru/wp-content/uploads/2018/03/Paint_3D_icon.png"
                     alt=""/>
                <p className={s.postDesc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, aliquid,
                    architecto consequuntur cum ea facere fugiat harum illo illum natus nobis officiis optio
                    praesentium quod quos, rerum suscipit vitae voluptate!</p>
            </div>
        );
    }
}

export default Post;