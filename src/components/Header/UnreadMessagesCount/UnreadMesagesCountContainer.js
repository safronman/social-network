import {connect} from "react-redux";
import React from "react";
import UnreadMessagesCount from "./UnreadMesagesCount";
import {newMessagesCountTC, unreadMessagesCounterSelector} from "../../../redux/reducers/dialogsPageReducer";
import {withRouter} from "react-router-dom";

let UnreadMessagesCountContainer = class extends React.Component {
    componentDidMount() {
        setInterval(() => {
            this.props.newMessagesCount();
        }, 50000)
    }

    render() {
        return <UnreadMessagesCount {...this.props}/>
    }
};

let mapStateToProps = (state) => {
    return {
        unreadMessagesCounter: unreadMessagesCounterSelector(state)
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