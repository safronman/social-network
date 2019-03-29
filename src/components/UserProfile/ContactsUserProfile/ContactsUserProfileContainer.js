import {connect} from "react-redux";
import ContactsUserProfile from "./ContactsUserProfile";
import {setContactsValueAC} from "../../../redux/reducers/userProfileReducer";

let mapStateToProps = (state) => {
    return {
        userProfile: state.userProfile
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        setContactsValue: (value) => {
            dispatch(setContactsValueAC(value));
        },
    }
};


const ContactsUserProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ContactsUserProfile);

export default ContactsUserProfileContainer;