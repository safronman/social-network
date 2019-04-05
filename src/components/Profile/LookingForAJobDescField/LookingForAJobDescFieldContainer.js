import {connect} from "react-redux";
import {setOwnerLookingForAJobDescriptionAC} from "../../../redux/reducers/profilePageReducer";
import LookingForAJobDescField from "./LookingForAJobDescField";


let mapStateToProps = (state) => {
    return {
        editMode: state.profilePage.editMode,
        lookingForAJobDescription: state.profilePage.lookingForAJobDescription
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        setCurrentLookingForAJobDescriptionValue: (value) => {
            dispatch(setOwnerLookingForAJobDescriptionAC(value));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LookingForAJobDescField);