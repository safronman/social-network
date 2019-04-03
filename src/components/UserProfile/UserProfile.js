import React from 'react';
import FullNameUserProfileContainer from "./FullNameUserProfile/FullNameUserProfileContainer";
import AboutMeUserProfileContainer from "./AboutMeUserProfile/AboutMeUserProfileContainer";
import ContactsUserProfileContainer from "./ContactsUserProfile/ContactsUserProfileContainer";
import LookingForAJobUserProfileContainer from "./LookingForAJobUserProfile/LookingForAJobUserProfileContainer";
import LookingForAJobDescUserProfileContainer
    from "./LookingForAJobDescUserProfile/LookingForAJobDescUserProfileContainer";

const UserProfile = () => {

    return (
        <div>
            <h2>User profile</h2>
            <FullNameUserProfileContainer/>
            <AboutMeUserProfileContainer/>
            <ContactsUserProfileContainer/>
            <LookingForAJobUserProfileContainer/>
            <LookingForAJobDescUserProfileContainer/>
        </div>
    )
};

export default UserProfile;