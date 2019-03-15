import Login from "./Login";
import {connect} from "react-redux";
import {
    loginThunkCreator,
    setCurrentCheckboxValueAC,
    setCurrentEmailTextAC,
    setCurrentPasswordTextAC
} from "../../redux/reducers/loginPageReducer";

let mapStateToProps = (state) => {
    return {
        loginPage: state.loginPage,
        authorization: state.authorization
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        login: (mail, password, rememberMe) => {
            dispatch(loginThunkCreator(mail, password, rememberMe))
        },
        setCurrentEmailText: (value) => {
            dispatch(setCurrentEmailTextAC(value));
        },
        setCurrentPasswordText: (value) => {
            dispatch(setCurrentPasswordTextAC(value))
        },
        setCurrentCheckboxValue: (value) => {
            dispatch(setCurrentCheckboxValueAC(value))
        }
    }
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;