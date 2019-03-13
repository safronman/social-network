import {connect} from "react-redux";
import AddMessage from "./AddMessage";
import {addCurrentMessageActionCreator, addMessageActionCreator} from "../../../../redux/reducers/messagesPageReducer";

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addCurrentMessage: (message) => {
            dispatch(addCurrentMessageActionCreator(message))
        },
        addMessage: (message) => {
            dispatch(addMessageActionCreator(message))
        }
    }
};

let AddMessageContainer = connect(mapStateToProps, mapDispatchToProps)(AddMessage);

export default AddMessageContainer;