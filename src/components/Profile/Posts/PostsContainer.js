import {connect} from "react-redux";
import Posts from "./Posts";

let mapStateToProps = (state)=> {
    return {
        postsData: state.profilePage.postsData,
        avatar: state.profilePage.avatar
    }
};

export default connect(mapStateToProps)(Posts);