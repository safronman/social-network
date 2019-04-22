import AddPost from "./AddPost";
import {connect} from "react-redux";
import {
    addCurrentMessageActionCreator,
    addPostActionCreator,
    currentMessageSelector
} from "../../../../redux/reducers/profilePageReducer";

let mapStateToProps = (state) => {
    return {
        currentMessage: currentMessageSelector(state)
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addCurrentMessage: (message) => {
            dispatch(addCurrentMessageActionCreator(message))
        },
        addPost: (message) => {
            dispatch(addPostActionCreator(message))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);