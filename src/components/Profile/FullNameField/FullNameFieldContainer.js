import {connect} from "react-redux";
import {setOwnerFullNameAC} from "../../../redux/reducers/profilePageReducer";
import FullNameField from "./FullNameField";

let mapStateToProps = (state) => {
    return {
        editMode: state.profilePage.editMode,
        fullName: state.profilePage.fullName
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