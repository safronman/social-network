import {connect} from "react-redux";
import React from "react";
import UnreadMessagesCount from "./UnreadMesagesCount";
import {newMessagesCountTC} from "../../../redux/reducers/dialogsPageReducer";
import {withRouter} from "react-router-dom";

let UnreadMessagesCountContainer = class extends React.Component {
    componentDidMount() {
        setInterval(() => {
            this.props.newMessagesCount();
        }, 5000)
    }

    render() {
        return <UnreadMessagesCount {...this.props}/>
    }
};

let mapStateToProps = (state) => {
    return {
        unreadMessagesCounter: state.dialogsPage.unreadMessagesCounter
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        newMessagesCount: () => {
            dispatch(newMessagesCountTC())
        }
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UnreadMessagesCountContainer));