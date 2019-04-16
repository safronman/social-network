import {connect} from "react-redux";
import ProfilePhoto from "./ProfilePhoto";
import {uploadAvatarTC} from "../../../redux/reducers/profilePageReducer";

let mapStateToProps = (state) => {
    return {
        avatar: state.profilePage.avatar
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        uploadAvatar: (file) => {
            dispatch(uploadAvatarTC(file));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ProfilePhoto);