import {connect} from "react-redux";
import LookingForAJobDescUserProfile from "./LookingForAJobDescUserProfile";
import {setUserLookingForAJobDescriptionAC} from "../../../redux/reducers/userProfileReducer";


let mapStateToProps = (state) => {
    return {
        editMode: state.profilePage.editMode,
        lookingForAJobDescription: state.userProfile.lookingForAJobDescription
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        setCurrentLookingForAJobDescriptionValue: (value) => {
            dispatch(setUserLookingForAJobDescriptionAC(value));
        },
    }
};


const LookingForAJobDescUserProfileContainer = connect(mapStateToProps, mapDispatchToProps)(LookingForAJobDescUserProfile);

export default LookingForAJobDescUserProfileContainer;