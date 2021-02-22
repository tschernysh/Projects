const SET_USER_LOG = 'SET-USER-LOG'

let initial = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const headerReducer = (state = initial, action) => {
    switch(action.type){
        case SET_USER_LOG:
            return{
                ...state,
                ...action.data,
                isAuth: true
            }
        default: 
            return state
    }
}


export const setUserLog = (id, email, login) => ({
    type: SET_USER_LOG,
    data: {id, email, login}
})


export default headerReducer