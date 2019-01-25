import React from 'react';
import styles from './Cover.module.css';
import cover from'../../../img/cover.jpg'

const Cover = (props) => {
    return (
        <img className={styles.coverImg}
             src={cover}
             alt="Cover"/>
    );
};

export default Cover;