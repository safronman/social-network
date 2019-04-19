import React from 'react';
import styles from './../Profile.module.css';

const ProfilePhoto = (props) => {

    let onPhotoChange = (event) => {
        props.uploadAvatar(event.target.files[0])
    };

    return (
        <div className={styles.profilePhotoWrapper}>
            <img className={styles.profilePhotoImg} src={props.avatar ? props.avatar :'https://www.fillmurray.com/100/100'} alt="avatar"/>
            <input type="file"
                   id='ownerAvatar'
                   onChange={onPhotoChange}/>
        </div>
    );
};

export default ProfilePhoto;