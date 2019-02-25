import PersonalInfo from "./PersonalInfo";
import {connect} from "react-redux";
import {toggleFullInfoActionCreator} from "../../../redux/profilePageReducer";

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        toggleFullInfo: () => {
            dispatch(toggleFullInfoActionCreator());
        }
    }
};

let PersonalInfoContainer = connect(mapStateToProps, mapDispatchToProps)(PersonalInfo);

export default PersonalInfoContainer;