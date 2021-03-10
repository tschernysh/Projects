import React from 'react'
import Profile from './Profile';
import {connect} from 'react-redux'
import {getUserProfile} from '../../state/profileReducer'
import Preloader from '../Common/Preloader/Preloader';
import {withRouter, Redirect} from 'react-router-dom'

class ProfileContainer extends React.Component{

  componentDidMount() {

    this.props.getUserProfile(this.props.match.params.userId)

    // this.props.toggleFetching(true)
    // let urlUserId = !this.props.match.params.userId ? '2' :  this.props.match.params.userId;
    //     usersAPI.getUserProfile(urlUserId)
    //     .then(data => { 
    //         this.props.updateUserProfile(data)
    //         this.props.toggleFetching(false);
    //     });

  }

  
  render() {

    if(!this.props.isAuth) return <Redirect to={'/login'} />

    return(
      <>
        {this.props.isFetching ? 
        <Preloader /> :
        <Profile  {...this.props} profile={this.props.profile} />
        }
      </>
    )
  }
}

let mapStateToProps = (state) => {
  return{
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching,
    isAuth: state.header.isAuth
  }
}

let WithRouterProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithRouterProfileContainer);