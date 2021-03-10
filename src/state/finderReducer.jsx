import { usersAPI } from "../api/api";

const TOGGLE_SUBSCRIBE = 'TOGGLE-SUBSCRIBE';
const ADD_USERS = 'ADD-USERS'
const CHANGE_PAGE = 'CHANGE-PAGE'
const UPDATE_USERS_COUNT = 'UPDATE-USERS-COUNT'
const TOGGLE_FETCHING = 'TOGGLE-FETCHING'
const TOGGLE_SUBSCRIBTION_FETCH = 'TOGGLE_SUBSCRIBTION_FETCH'

let initial = {
    users: [],
    currentPage: 1,
    pageSize: 8,
    usersCount: 200,
    isFetching: false,
    subscriptionFetch: []
}

const finderReducer = (state = initial, action) => {

    switch (action.type) {
        case TOGGLE_SUBSCRIBE:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        action.subscribed = u.followed ? false : true;
                        return { ...u, followed: action.subscribed }
                    }
                    return u;
                })
            }
        case ADD_USERS:
            return {
                ...state,
                users: action.users
            }
        case CHANGE_PAGE:
            return {
                ...state,
                currentPage: action.id
            }
        case UPDATE_USERS_COUNT:
            return {
                ...state,
                usersCount: action.newValue
            }
        case TOGGLE_FETCHING:
            return{
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_SUBSCRIBTION_FETCH:
            return{
                ...state,
                subscriptionFetch: action.isFetching
                ? [...state.subscriptionFetch, action.userId]
                : state.subscriptionFetch.filter(id => id != action.userId)
            }
        default:
            return state
    }
}

export const updateUsersCount = (newValue) => ({
    type: UPDATE_USERS_COUNT,
    newValue
});
export const changePage = (id) => ({
    type: CHANGE_PAGE,
    id
});
export const toggleSubscribe = (userId) => ({
    type: TOGGLE_SUBSCRIBE,
    userId
});
export const addUsers = (users) => ({
    type: ADD_USERS,
    users
});
export const toggleFetching = (isFetching) => ({
    type: TOGGLE_FETCHING,
    isFetching
})
export const toggleSubscriptionFetch = (isFetching ,userId) => ({
    type: TOGGLE_SUBSCRIBTION_FETCH,
    isFetching, userId
})

export const getFinderUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleFetching(true))
            usersAPI.getUsers(currentPage, pageSize)
            .then(data => { 
                dispatch(addUsers(data.items));
                // dispatch.updateUsersCount(Response.data.totalCount)
                dispatch(toggleFetching(false));
            } 
        );
    }
};

export const userFinderSubscribe = (id) => {
    return (dispatch) => {
        dispatch(toggleSubscriptionFetch(true, id))
        usersAPI.userFollow(id)
            .then(Response => {
                if (Response.data.resultCode === 0) {
                dispatch(toggleSubscribe(id))
                }
                dispatch(toggleSubscriptionFetch(false, id))
            }
        )
    }
};
export const userFinderUnsubscribe = (id) => {
    return (dispatch) => {
        dispatch(toggleSubscriptionFetch(true, id))
        usersAPI.userUnfollow(id)
            .then(Response => {
                if (Response.data.resultCode === 0) {
                dispatch(toggleSubscribe(id))
                }
                dispatch(toggleSubscriptionFetch(false, id))
            }
        )
    }
};



export default finderReducer;