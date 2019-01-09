import React, {Component} from 'react';
import s from './Profile.module.css';
import Cover from "./Cover/Cover";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import AddPost from "./AddPost/AddPost";
import Posts from "./Posts/Posts";


class Profile extends Component {

    render() {
        return (
            <main className={s.profile}>
                <Cover />
                <PersonalInfo/>
                <AddPost/>
                <Posts/>
            </main>
        );
    }
}

export default Profile;