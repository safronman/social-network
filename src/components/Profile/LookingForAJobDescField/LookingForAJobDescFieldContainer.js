import {connect} from "react-redux";
import {
    editModeSelector,
    lookingForAJobDescriptionSelector,
    setOwnerLookingForAJobDescriptionAC
} from "../../../redux/reducers/profilePageReducer";
import LookingForAJobDescField from "./LookingForAJobDescField";


let mapStateToProps = (state) => {
    return {
        editMode: editModeSelector(state),
        lookingForAJobDescription: lookingForAJobDescriptionSelector(state)
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