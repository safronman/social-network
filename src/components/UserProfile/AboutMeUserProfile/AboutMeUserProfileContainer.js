import {connect} from "react-redux";
import AboutMeUserProfile from "./AboutMeUserProfile";
import {setUserAboutMeAC} from "../../../redux/reducers/userProfileReducer";

let mapStateToProps = (state) => {
    return {
        editMode: state.profilePage.editMode,
        aboutMe: state.userProfile.aboutMe
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        setCurrentAboutMeValue: (value) => {
            dispatch(setUserAboutMeAC(value))
        }
    }
};


const AboutMeUserProfileContainer = connect(mapStateToProps, mapDispatchToProps)(AboutMeUserProfile);

export default AboutMeUserProfileContainer;