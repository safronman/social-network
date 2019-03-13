import {connect} from "react-redux";
import Profile from "./Profile";

let mapStateToProps = (state)=> {
    return {
        profilePage:state.profilePage
    }
};

let ProfileContainer = connect(mapStateToProps)(Profile);

export default ProfileContainer;