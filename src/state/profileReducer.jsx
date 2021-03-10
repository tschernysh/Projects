import {usersAPI} from '../api/api'

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_USER_PROFILE = 'UPDATE-USER-PROFILE'
const TOGGLE_FETCHING = 'TOGGLE-FETCHING'

let initial = {
    posts: [
        { message: 'played doto today', id: '1', like: '52' },
    ],
    newPostText: '',
    profile: null,
    isFetching: false,

}

const profileReducer = (state = initial, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case UPDATE_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}

export const addPostCreator = () => ({ type: ADD_POST });
export const updateNewPostTextCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});
export const updateUserProfile = (profile) => ({
    type: UPDATE_USER_PROFILE,
    profile
});
export const toggleFetching = (isFetching) => ({
    type: TOGGLE_FETCHING,
    isFetching
});
export const getUserProfile = (userId) => {
    return (dispatch) => {
        dispatch(toggleFetching(true));
        let urlUserId = !userId ? '15090' : userId;
        usersAPI.getUserProfile(urlUserId)
        .then(data => { 
            dispatch(updateUserProfile(data));
            dispatch(toggleFetching(false));
        });
    }
}


export default profileReducer;