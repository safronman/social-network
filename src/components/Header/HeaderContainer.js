import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {authMeTC, logOutTC, setAuthAC} from "../../redux/reducers/authorizationReducer";
import {withRouter} from "react-router-dom";

let HeaderContainer = class extends React.Component {
    render() {
        return <Header {...this.props}/>
    }

    componentDidMount() {
        this.props.authMe();
    }
};


let mapStateToProps = (state) => {
    return {
        authorization: state.authorization,
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