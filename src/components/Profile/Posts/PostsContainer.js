import {connect} from "react-redux";
import Posts from "./Posts";

let mapStateToProps = (state)=> {
    return {
        profilePage: state.profilePage
    }
};

export default connect(mapStateToProps)(Posts);