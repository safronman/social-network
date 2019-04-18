import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {authMeTC, logOutTC, setAuthAC} from "../../redux/reducers/authorizationReducer";
import {withRouter} from "react-router-dom";

let HeaderContainer = class extends React.Component {
    componentDidMount() {
        this.props.authMe();
    }

    render() {
        return <Header {...this.props}/>
    }
};


let mapStateToProps = (state) => {
    return {
        isAuth: state.authorization.isAuth,
        userName: state.authorization.userInfo.userName,
        avatar: state.profilePage.avatar
    }
};


let mapDispatchToProps = (dispatch) => {
    return {
        authMe: () => {
            dispatch(authMeTC())
        },
        logOut: () => {
            dispatch(logOutTC())
        },
        setAuth: (value) => {
            dispatch(setAuthAC(value))
        }
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderContainer));