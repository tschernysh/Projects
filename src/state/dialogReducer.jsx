const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initial = {
    users:[
        {name: 'Тёма', id: 0, photo: 'https://s3.nat-geo.ru/images/2019/10/30/db920c4427944bc8b7a862619fbff4d1.max-2000x1000.jpg'},
        {name: 'Хомяк', id: 1, photo: 'https://s3.nat-geo.ru/images/2019/10/30/db920c4427944bc8b7a862619fbff4d1.max-2000x1000.jpg'},
        {name: 'Илья', id: 2, photo: 'https://s3.nat-geo.ru/images/2019/10/30/db920c4427944bc8b7a862619fbff4d1.max-2000x1000.jpg'},
        {name: 'Айкос', id: 3, photo: 'https://s3.nat-geo.ru/images/2019/10/30/db920c4427944bc8b7a862619fbff4d1.max-2000x1000.jpg'},
        {name: 'ДиОнИзи', id: 4, photo: 'https://s3.nat-geo.ru/images/2019/10/30/db920c4427944bc8b7a862619fbff4d1.max-2000x1000.jpg'},
        {name: 'Настя', id: 5, photo: 'https://s3.nat-geo.ru/images/2019/10/30/db920c4427944bc8b7a862619fbff4d1.max-2000x1000.jpg'},
        {name: 'Ромка', id: 6, photo: 'https://s3.nat-geo.ru/images/2019/10/30/db920c4427944bc8b7a862619fbff4d1.max-2000x1000.jpg'},
        {name: 'Вовчег', id: 7, photo: 'https://s3.nat-geo.ru/images/2019/10/30/db920c4427944bc8b7a862619fbff4d1.max-2000x1000.jpg'}
    ],
    messages:[
        {message: 'hey bro', id: 0},
        {message: 'go play doto', id: 1},
        {message: 'dont ignore me', id: 2},
        {message: 'R U here ?', id: 3},
        {message: 'maaaaaaaaan', id: 4},
    ],
    newMessageText: ''
}

const dialogReducer = (state = initial, action) => {
    switch(action.type){
        case UPDATE_NEW_MESSAGE_TEXT:{
            let stateCopy = {...state}
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        }
            
        case SEND_MESSAGE:{
            let stateCopy = {...state}
            let newMessage = {
                message: state.newMessageText,
                id: 5
            }
            stateCopy.messages = [...state.messages]
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy
        }
            
        default:
            return state
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text})

export default dialogReducer;