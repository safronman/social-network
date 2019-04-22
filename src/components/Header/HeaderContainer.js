import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {
    authMeTC,
    isAuthSelector,
    logOutTC,
    setAuthAC,
    userNameSelector
} from "../../redux/reducers/authorizationReducer";
import {withRouter} from "react-router-dom";
import {avatarSelector} from "../../redux/reducers/profilePageReducer";

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
        isAuth: isAuthSelector(state),
        userName: userNameSelector(state),
        avatar: avatarSelector(state)
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