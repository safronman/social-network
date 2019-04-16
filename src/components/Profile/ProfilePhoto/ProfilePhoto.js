import React from 'react';
import styles from './ProfilePhoto.module.css';

const ProfilePhoto = (props) => {

    let onPhotoChange = (event) => {
        props.uploadAvatar(event.target.files[0])
    };

    return (
        <div className={styles.profilePhoto_wrapper}>
            <img className={styles.profilePhoto_img} src={props.avatar ? props.avatar :'https://www.fillmurray.com/100/100'} alt="avatar"/>
            <input type="file"
                   id='ownerAvatar'
                   onChange={onPhotoChange}/>
        </div>
    );
};

export default ProfilePhoto;