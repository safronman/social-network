import AddPost from "./AddPost";
import {connect} from "react-redux";
import {addCurrentMessageActionCreator, addPostActionCreator} from "../../../../redux/profilePageReducer";

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
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

let AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost);

export default AddPostContainer;