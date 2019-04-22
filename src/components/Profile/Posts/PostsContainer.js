import {connect} from "react-redux";
import Posts from "./Posts";
import {avatarSelector} from "../../../redux/reducers/profilePageReducer";

let mapStateToProps = (state)=> {
    return {
        postsData: state.profilePage.postsData,
        avatar: avatarSelector(state)
    }
};

export default connect(mapStateToProps)(Posts);