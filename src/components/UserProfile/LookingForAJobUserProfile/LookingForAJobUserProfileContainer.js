import {connect} from "react-redux";
import LookingForAJobUserProfile from "./LookingForAJobUserProfile";
import {setUserLookingForAJobAC} from "../../../redux/reducers/userProfileReducer";

let mapStateToProps = (state) => {
    return {
        userProfile: state.userProfile
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