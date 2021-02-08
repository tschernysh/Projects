const TOGGLE_SUBSCRIBE = 'TOGGLE-SUBSCRIBE';

let initial = {
    users: [
        {userName: 'Gaponchyk Ivan', city: 'Vinnytsia' , age: '20', id: '0', isSubscribed: false},
        {userName: 'Artem Khaba', city: 'London' , age: '19', id: '1', isSubscribed: false},
        {userName: 'Vitaliy Gromjako', city: 'London' , age: '24', id: '2', isSubscribed: false},
    ]
}

const finderReducer = (state = initial, action) => {
    let stateCopy = {...state}

    switch(action.type){
        case TOGGLE_SUBSCRIBE:
            stateCopy.users = [...state.users]
            stateCopy.users[action.id].isSubscribed = action.subscribed ? false : true
            return stateCopy
        default:
            return state
    }
}

export const toggleSubscribeCreator = (userId, userSubscription) => ({
    type: TOGGLE_SUBSCRIBE,
    id: userId ,
    subscribed: userSubscription
});



export default finderReducer;