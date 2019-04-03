import {connect} from "react-redux";
import FullNameUserProfile from "./FullNameUserProfile";
import {
    setUserFullNameAC
} from "../../../redux/reducers/userProfileReducer";

let mapStateToProps = (state) => {
    return {
        editMode: state.profilePage.editMode,
        fullName: state.userProfile.fullName
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        setCurrentFullNameValue: (value) => {
            dispatch(setUserFullNameAC(value));
        }
    }
};


const FullNameUserProfileContainer = connect(mapStateToProps, mapDispatchToProps)(FullNameUserProfile);

export default FullNameUserProfileContainer;