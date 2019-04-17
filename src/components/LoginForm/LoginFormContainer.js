import {connect} from "react-redux";
import {loginTC} from "../../redux/reducers/loginPageReducer";
import SuperLoginForm from "./LoginForm";
import React from "react";

let LoginFormContainer = class extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit(values){
        this.props.login(values.email, values.password, values.saveData = false);
    };

    render() {
        return <SuperLoginForm {...this.props} onSubmit={this.submit}/>
    }
};

let mapStateToProps = (state) => {
    return {
        status: state.loginPage.status,
        message: state.loginPage.message,
        isAuth: state.authorization.isAuth
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        login: (mail, password, rememberMe) => {
            dispatch(loginTC(mail, password, rememberMe))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);