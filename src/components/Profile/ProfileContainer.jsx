import React from 'react'
import Profile from './Profile';
import {connect} from 'react-redux'
import {updateUserProfile , toggleFetching} from '../../state/profileReducer'
import Preloader from '../Common/Preloader/Preloader';
import {withRouter} from 'react-router-dom'
import { usersAPI } from '../../api/api';

class ProfileContainer extends React.Component{

  componentDidMount() {
    this.props.toggleFetching(true)
    let urlUserId = !this.props.match.params.userId ? '2' :  this.props.match.params.userId;
        usersAPI.getUserProfile(urlUserId)
        .then(data => { 
            this.props.updateUserProfile(data)
            this.props.toggleFetching(false);
        });
  }

  
  render() {

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
    isFetching: state.profilePage.isFetching
  }
}

let WithRouterProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {updateUserProfile, toggleFetching})(WithRouterProfileContainer);