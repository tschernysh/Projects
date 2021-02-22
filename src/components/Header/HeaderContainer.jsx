import React from 'react'
import Header from './Header';
import axios from 'axios';
import { connect } from 'react-redux';
import {setUserLog} from '../../state/headerReducer'

class HeaderContainer extends React.Component{

    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
             .then(Response => {
                 if(Response.data.resultCode === 0) {
                     let {id, login, email} = Response.data.data;
                     this.props.setUserLog(id, login, email)
                 }
             })
    }


    render() {
        return(
            <Header {...this.props} />
        )
    }
};

let mapStateToProps = (state) => {
    return{
        isAuth: state.header.isAuth,
        login: state.header.login
    }
}

export default connect(mapStateToProps, {setUserLog})(HeaderContainer);