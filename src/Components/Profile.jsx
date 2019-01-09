import React, {Component} from 'react';
import s from './Profile.module.css';

class Profile extends Component {

    render() {
        return (
            <main className={s.profile}>
                <div>
                    <img className={s.coverImg} src="http://www.trendycovers.com/covers/abstract_3d_facebook_cover_1370594397.jpg"
                         alt="Cover"/>
                </div>

                <div className={s.info}>
                    <img className={s.avatar} src="https://en.opensuse.org/images/1/14/Button-filled-monochrome.png" alt=""/>
                    <ul className={s.list}>
                        <li className={s.item}>Birthday: September 21, 1989</li>
                        <li className={s.item}>Current city: Minsk</li>
                        <li className={s.item}>Relationship status: Married</li>
                        <li className={s.item}>Education: BSUIR, 2011</li>
                    </ul>
                </div>

                <div className={s.newPost}>
                    <h2>My posts</h2>
                    <textarea className={s.newPostTextarea}>Add text</textarea>
                    <button className={s.newPostBtn}>Send</button>
                </div>
            </main>
        );
    }
}

export default Profile;