import {connect} from "react-redux";
import {loginTC, messageSelector, statusSelector} from "../../redux/reducers/loginPageReducer";
import LoginForm from "./LoginForm";
import React from "react";
import {reduxForm} from "redux-form";
import {isAuthSelector} from "../../redux/reducers/authorizationReducer";

let LoginFormUnderReduxForm = reduxForm({
    form: 'loginForm'
})(LoginForm);

let LoginFormContainer = class extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit(values) {
        this.props.login(values.email, values.password, values.saveData);
    };

    render() {
        return <LoginFormUnderReduxForm {...this.props} onSubmit={this.submit}/>
    }
};

let mapStateToProps = (state) => {
    return {
        status: statusSelector(state),
        message: messageSelector(state),
        isAuth: isAuthSelector(state)
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