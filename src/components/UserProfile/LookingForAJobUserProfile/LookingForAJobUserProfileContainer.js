import {connect} from "react-redux";
import LookingForAJobUserProfile from "./LookingForAJobUserProfile";
import {setUserLookingForAJobAC} from "../../../redux/reducers/userProfileReducer";

let mapStateToProps = (state) => {
    return {
        lookingForAJob: state.userProfile.lookingForAJob
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        setLookingForAJobChangeValue: (value) => {
            dispatch(setUserLookingForAJobAC(value));
        }
    }
};


const LookingForAJobUserProfileContainer = connect(mapStateToProps, mapDispatchToProps)(LookingForAJobUserProfile);

export default LookingForAJobUserProfileContainer;