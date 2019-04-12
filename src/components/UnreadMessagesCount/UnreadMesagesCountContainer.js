import {connect} from "react-redux";
import React from "react";
import UnreadMessagesCount from "./UnreadMesagesCount";
import {newMessagesCountTC, updateCounterAndGetMessagesTC} from "../../redux/reducers/dialogsPageReducer";
import {withRouter} from "react-router-dom";

let UnreadMessagesCountContainer = class extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        setInterval(() => {
            this.props.newMessagesCount();
        }, 10000)
    }

    componentDidUpdate(prevProps) {
        let lastMessage = this.props.messages[this.props.messages.length - 1];

        if (this.props.unreadMessagesCounter !== prevProps.unreadMessagesCounter &&
            String(lastMessage.senderId) === this.props.currentDialogId) {
            this.props.updateCounterAndGetMessages(this.props.currentDialogId, lastMessage.addedAt);
        }
    }


    render() {
        return <UnreadMessagesCount {...this.props}/>
    }
};

let mapStateToProps = (state) => {
    return {
        unreadMessagesCounter: state.dialogsPage.unreadMessagesCounter,
        currentDialogId: state.dialogsPage.currentDialogId,
        messages: state.dialogsPage.messages
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        newMessagesCount: () => {
            dispatch(newMessagesCountTC())
        },
        updateCounterAndGetMessages: (userId, date) => {
            dispatch(updateCounterAndGetMessagesTC(userId, date))
        }

    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UnreadMessagesCountContainer));