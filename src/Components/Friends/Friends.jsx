import React from 'react';
import styles from './Friends.module.css';
import Friend from "./Friend/Friend";

const Friends = (props) => {
    // debugger
    let friends = props.state.friends.map(item => <Friend key={item.id} name={item.name} id={item.id} img={item.img}/>);

    return (
        <div>
            <h3>Friends</h3>
            <div className={styles.friendsList}>{friends}</div>
        </div>
    );
};

export default Friends;