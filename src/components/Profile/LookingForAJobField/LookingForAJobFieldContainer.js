import {connect} from "react-redux";
import {lookingForAJobSelector, setOwnerLookingForAJobAC} from "../../../redux/reducers/profilePageReducer";
import LookingForAJobField from "./LookingForAJobField";


let mapStateToProps = (state) => {
    return {
        lookingForAJob: lookingForAJobSelector(state)
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        setLookingForAJobChangeValue: (value) => {
            dispatch(setOwnerLookingForAJobAC(value));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LookingForAJobField);