import { authAPI } from "../api/api"

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

export const authUser = () => {
    return (dispatch) => {
        authAPI.me()
            .then(Response => {
                if(Response.data.resultCode === 0) {
                   let {id, login, email} = Response.data.data;
                   dispatch(setUserLog(id, login, email))
                }
            })
    }
}

export default headerReducer