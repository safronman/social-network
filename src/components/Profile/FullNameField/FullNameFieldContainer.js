import {connect} from "react-redux";
import {editModeSelector, fullNameSelector, setOwnerFullNameAC} from "../../../redux/reducers/profilePageReducer";
import FullNameField from "./FullNameField";

let mapStateToProps = (state) => {
    return {
        editMode: editModeSelector(state),
        fullName: fullNameSelector(state)
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        setCurrentFullNameValue: (value) => {
            dispatch(setOwnerFullNameAC(value));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(FullNameField);