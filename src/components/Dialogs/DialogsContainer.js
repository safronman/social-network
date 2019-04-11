import React from 'react';
import {connect} from "react-redux";
import {
    deleteMessageTC,
    getDialogsTC,
    initialRequestsTC,
    sendMessageTC
} from "../../redux/reducers/dialogsPageReducer";
import Dialogs from "./Dialogs";
import {withRouter} from "react-router-dom";


let DialogsContainer = class extends React.Component {
    componentDidMount() {
        // debugger
        if (this.props.match.params.userId) {
            this.props.initialRequests(this.props.match.params.userId);
        } else {
            this.props.getDialogs();
        }
    }

    componentDidUpdate(prevProps) {
        // debugger
        if (this.props.match.params.userId) {
            if (this.props.match.params.userId !== prevProps.currentDialogId) {
                this.props.initialRequests(this.props.match.params.userId);
            }
        }
    }

    render() {
        return <Dialogs {...this.props}/>
    }
};


let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        currentDialogId: state.dialogsPage.currentDialogId,
        messages: state.dialogsPage.messages,
        authorization: state.authorization
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
        }
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DialogsContainer));