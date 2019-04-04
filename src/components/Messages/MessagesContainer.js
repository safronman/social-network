import {connect} from "react-redux";
import Messages from "./Messages";

let mapStateToProps = (state)=> {
    return {
        messagesPage: state.messagesPage
    }
};

export default connect(mapStateToProps)(Messages);