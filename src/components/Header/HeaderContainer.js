import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {authMeThunkCreator, logOutThunkCreator} from "../../redux/reducers/authorizationReducer";

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
        authorization: state.authorization
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