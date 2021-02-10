import React from 'react';
import Finder from './Finder';
import { connect } from 'react-redux';
import { toggleSubscribeCreator, addUsersCreator } from '../../state/finderReducer';

let mapStateToProps = (state) => {
    return{
        users: state.finderPage.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        subscribeOnUser: (userId, userSubscription) => {
            dispatch(toggleSubscribeCreator(userId, userSubscription))
        },  
        addUsers: (users) => {
            dispatch(addUsersCreator(users))
        }
    }
}

let FinderContainer = connect(mapStateToProps, mapDispatchToProps)(Finder);


export default FinderContainer;