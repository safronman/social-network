import React from 'react';
import styles from './Dialogs.module.css';
import DialogPreview from "./DialogPreview/DialogPreview";
import MyMessages from "./MyMessages/MyMessages";
import FriendsMessages from "./FriendsMessages/FriendsMessages";
import PropTypes from "prop-types";
// import DialogMainContent from "./DialogMainContent/DialogMainContent";


const Dialogs = (props) => {
    // debugger

    let dialogsPreview = props.state.dialogsData.map(item => {
        return <DialogPreview key={item.id} id={item.id} name={item.name} img={item.img}/>
    });

    let dialogsMessagesFromMe = props.state.myMessages.map(item => {
        return <MyMessages key={item.id} id={item.id} message={item.message} img={item.img}/>
    });

    let dialogsMessagesFromFriends = props.state.friendsMessagesData.map(item => {
        return <FriendsMessages key={item.id} id={item.id} message={item.message} img={item.img}/>
    });

    // let dialogsMessagesFromMe = props.state.myMessages.map(item => {
    //     return <DialogMainContent key={item.id} id={item.id} message={item.message} img={item.img}/>
    // });
    //
    // let dialogsMessagesFromFriends = props.state.friendsMessagesData.map(item => {
    //     return <DialogMainContent key={item.id} id={item.id} message={item.message} img={item.img}/>
    // });

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsPeople}>
                <ul className={styles.dialogsList}>{dialogsPreview}</ul>
            </div>

            <div>
                <div className={styles.dialogsListContent}>{dialogsMessagesFromMe}</div>
                <div className={styles.dialogsListContent}>{dialogsMessagesFromFriends}</div>
            </div>
        </div>
    );
};

Dialogs.propTypes = {
    state: PropTypes.shape({
        dialogsData: PropTypes.array,
        myMessages: PropTypes.array,
        friendsMessagesData: PropTypes.array
    })
};

export default Dialogs;