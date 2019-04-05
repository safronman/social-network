import {connect} from "react-redux";
import {setOwnerAboutMeAC} from "../../../redux/reducers/profilePageReducer";
import AboutMeField from "./AboutMeField";

let mapStateToProps = (state) => {
    return {
        editMode: state.profilePage.editMode,
        aboutMe: state.profilePage.aboutMe
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