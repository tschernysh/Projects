import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import finderReducer from "./finderReducer";
import headerReducer from "./headerReducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    finderPage: finderReducer,
    header: headerReducer
})

let store = createStore(reducers, applyMiddleware(thunk))

window.store = store;

export default store;