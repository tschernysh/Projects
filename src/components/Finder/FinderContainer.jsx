import React from 'react';
import Finder from './Finder';
import { connect } from 'react-redux';
import { toggleSubscribe, updateUsersCount, toggleSubscriptionFetch, getFinderUsers, userFinderSubscribe, userFinderUnsubscribe} from '../../state/finderReducer';

let mapStateToProps = (state) => {
    return{
        users: state.finderPage.users,
        currentPage: state.finderPage.currentPage,
        pageSize: state.finderPage.pageSize,
        usersCount: state.finderPage.usersCount,
        isFetching: state.finderPage.isFetching,
        subscriptionFetch: state.finderPage.subscriptionFetch
    }
}

let FinderContainer = connect(mapStateToProps, {
        toggleSubscribe,
        updateUsersCount,
        toggleSubscriptionFetch,
        getFinderUsers,
        userFinderSubscribe,
        userFinderUnsubscribe
    })(Finder);


export default FinderContainer;