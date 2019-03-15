import Login from "./Login";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../redux/reducers/loginPageReducer";

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
        }
    }
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;