const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initial = {
    posts:[
        {message: 'played doto today' , id: '1' , like: '52'},
    ],
    newPostText: ''
    
}

const profileReducer = (state = initial, action) => {


    let stateCopy = {
        ...state,
        posts: [...state.posts]
    };

    switch(action.type){
        case ADD_POST:
            let newPost = {
                id: 5,
                message: stateCopy.newPostText,
                likesCount: 0
            }
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        case UPDATE_NEW_POST_TEXT:
            stateCopy.newPostText = action.newText;
            return stateCopy;
        default:
            return state
    }
}

export const addPostCreator = () => ({type: ADD_POST});
export const updateNewPostTextCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text})
export default profileReducer;