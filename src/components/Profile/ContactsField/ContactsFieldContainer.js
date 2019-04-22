import {connect} from "react-redux";
import {editModeSelector, setNewContactsValueAC} from "../../../redux/reducers/profilePageReducer";
import ContactsField from "./ContactsField";

let mapStateToProps = (state) => {
    return {
        editMode: editModeSelector(state),
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