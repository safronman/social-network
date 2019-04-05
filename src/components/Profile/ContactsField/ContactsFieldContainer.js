import {connect} from "react-redux";
import {setNewContactsValueAC} from "../../../redux/reducers/profilePageReducer";
import ContactsField from "./ContactsField";

let mapStateToProps = (state) => {
    return {
        editMode: state.profilePage.editMode,
        contacts: state.profilePage.contacts
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        setNewContactsValue: (value, item) => {
            dispatch(setNewContactsValueAC(value, item));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ContactsField);