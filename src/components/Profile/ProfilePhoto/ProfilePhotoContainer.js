import {connect} from "react-redux";
import ProfilePhoto from "./ProfilePhoto";
import {avatarSelector, uploadAvatarTC} from "../../../redux/reducers/profilePageReducer";

let mapStateToProps = (state) => {
    return {
        avatar: avatarSelector(state)
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