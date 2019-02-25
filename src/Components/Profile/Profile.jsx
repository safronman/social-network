import React from 'react';
import Cover from "./Cover/Cover";
import PersonalInfoContainer from "./PersonalInfo/PersonalInfoContainer";
import PostsContainer from "./Posts/PostsContainer";

const Profile = () => {
    // debugger
    return (
        <main>
            <Cover/>
            <PersonalInfoContainer />
            <PostsContainer />
        </main>
    );
};

export default Profile;