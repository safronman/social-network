import {connect} from "react-redux";
import {aboutMeSelector, editModeSelector, setOwnerAboutMeAC} from "../../../redux/reducers/profilePageReducer";
import AboutMeField from "./AboutMeField";

let mapStateToProps = (state) => {
    return {
        editMode: editModeSelector(state),
        aboutMe: aboutMeSelector(state)
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        setCurrentAboutMeValue: (value) => {
            dispatch(setOwnerAboutMeAC(value))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutMeField);