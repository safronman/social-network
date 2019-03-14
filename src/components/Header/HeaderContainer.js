import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {authMeThunkCreator, logOutThunkCreator} from "../../redux/reducers/authPageReducer";

let HeaderContainer = class extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <Header {...this.props}/>
    }

    componentDidMount() {
        this.props.authMe();
    }
};


let mapStateToProps = (state) => {
    return {
        authPage: state.authPage
        // isAuth: state.authPage.isAuth,
        // userInfo: state.authPage.userInfo
    }
};


let mapDispatchToProps = (dispatch) => {
    return {
        authMe: () => {
            dispatch(authMeThunkCreator())
        },
        logOut: () => {
            dispatch(logOutThunkCreator())
        }
    }
};

HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);

export default HeaderContainer;