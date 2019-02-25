import {connect} from "react-redux";
import Posts from "./Posts";

let mapStateToProps = (state)=> {
    return {
        profilePage: state.profilePage
    }
};

let PostsContainer = connect(mapStateToProps)(Posts);

export default PostsContainer;