const TOGGLE_SUBSCRIBE = 'TOGGLE-SUBSCRIBE';
const ADD_USERS = 'ADD-USERS'

let initial = {
    users: [    ]
}

const finderReducer = (state = initial, action) => {

    switch(action.type){
        case TOGGLE_SUBSCRIBE:
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.id){
                        action.subscribed = u.followed ? false : true;
                        return {...u, followed: action.subscribed}
                    }
                    return u;
                })
            }
        case ADD_USERS:
            return{
                ...state,
                users: action.addedUsers
            }
        default:
            return state
    }
}

export const toggleSubscribeCreator = (userId, userSubscription) => ({
    type: TOGGLE_SUBSCRIBE,
    id: userId ,
    subscribed: userSubscription
});
export const addUsersCreator = (users) => ({
    type: ADD_USERS,
    addedUsers: users
})


export default finderReducer;