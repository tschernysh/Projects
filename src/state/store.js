import profileReducer from "./profileReducer"
import dialogReducer from "./dialogReducer";


let store = {
    _state:{
        profilePage: {
            posts:[
                {message: 'played doto today' , id: '1' , like: '52'},
            ],
            newPostText: ''
        },
        dialogPage: {
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
    }, 
    getState(){
        return this._state;
    },
    _callSubscriber(){
        console.log('state changed');
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    dispatch(action){
        
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._callSubscriber(this._state)

        this._state.dialogPage = dialogReducer(this._state.dialogPage, action)
        this._callSubscriber(this._state)
    }
}


window.store = store;
export default store;
