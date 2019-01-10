import React from 'react';
import s from './Cover.module.css';

const Cover = (props) => {
    return (
        <img className={s.coverImg}
             src="http://www.trendycovers.com/covers/abstract_3d_facebook_cover_1370594397.jpg"
             alt="Cover"/>
    );
};

export default Cover;