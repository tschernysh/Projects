const TOGGLE_SUBSCRIBE = 'TOGGLE-SUBSCRIBE';
const ADD_USERS = 'ADD-USERS'
const CHANGE_PAGE = 'CHANGE-PAGE'
const UPDATE_USERS_COUNT = 'UPDATE-USERS-COUNT'
const TOGGLE_FETCHING = 'TOGGLE-FETCHING'

let initial = {
    users: [],
    currentPage: 1,
    pageSize: 8,
    usersCount: 200,
    isFetching: false
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
export const toggleSubscribe = (userId, userSubscription) => ({
    type: TOGGLE_SUBSCRIBE,
    userId,
    userSubscription
});
export const addUsers = (users) => ({
    type: ADD_USERS,
    users
});
export const toggleFetching = (isFetching) => ({
    type: TOGGLE_FETCHING,
    isFetching
})


export default finderReducer;