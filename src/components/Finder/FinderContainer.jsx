import React from 'react';
import Finder from './Finder';
import { connect } from 'react-redux';
import { toggleSubscribe, addUsers, changePage, updateUsersCount, toggleFetching } from '../../state/finderReducer';

let mapStateToProps = (state) => {
    return{
        users: state.finderPage.users,
        currentPage: state.finderPage.currentPage,
        pageSize: state.finderPage.pageSize,
        usersCount: state.finderPage.usersCount,
        isFetching: state.finderPage.isFetching
    }
}

let FinderContainer = connect(mapStateToProps, {
        toggleSubscribe,
        addUsers,
        changePage,
        updateUsersCount,
        toggleFetching,
    })(Finder);


export default FinderContainer;