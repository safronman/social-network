import React from 'react';
import {connect} from "react-redux";
import {
    currentDialogIdSelector,
    deleteMessageTC,
    dialogsSelector,
    getDialogsTC,
    initialRequestsTC,
    messagesSelector,
    sendMessageTC,
    unreadMessagesCounterSelector,
    updateUnreadDialogTC
} from "../../redux/reducers/dialogsPageReducer";
import Dialogs from "./Dialogs";
import {withRouter} from "react-router-dom";
import {isAuthSelector, userIdSelector} from "../../redux/reducers/authorizationReducer";
import {avatarSelector} from "../../redux/reducers/profilePageReducer";


let DialogsContainer = class extends React.Component {
    componentDidMount() {
        if (this.props.match.params.userId) {
            this.props.initialRequests(this.props.match.params.userId);
        } else {
            this.props.getDialogs();
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId) {

            let lastMessage = this.props.messages[this.props.messages.length - 1];

            if (this.props.match.params.userId !== String(prevProps.currentDialogId )) {
                this.props.initialRequests(this.props.match.params.userId);
            }
            if (this.props.unreadMessagesCounter !== prevProps.unreadMessagesCounter) {
                this.props.updateUnreadDialog(this.props.match.params.userId, lastMessage.addedAt);
            }
        }
    }

    render() {
        return <Dialogs {...this.props}/>
    }
};


let mapStateToProps = (state) => {
    return {
        dialogs: dialogsSelector(state),
        currentDialogId: currentDialogIdSelector(state),
        messages: messagesSelector(state),
        unreadMessagesCounter: unreadMessagesCounterSelector(state),
        userId: userIdSelector(state),
        avatar: avatarSelector(state),
        isAuth: isAuthSelector(state)
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        initialRequests: (userId) => {
            dispatch(initialRequestsTC(userId))
        },
        getDialogs: () => {
            dispatch(getDialogsTC())
        },
        sendMessage: (userId, message) => {
            dispatch(sendMessageTC(userId, message))
        },
        deleteMessage: (messageId, userId) => {
            dispatch(deleteMessageTC(messageId, userId))
        },
        updateUnreadDialog: (userId, date) => {
            dispatch(updateUnreadDialogTC(userId, date))
        }
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DialogsContainer));