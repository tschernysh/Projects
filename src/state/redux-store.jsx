import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import finderReducer from "./finderReducer";
import headerReducer from "./headerReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    finderPage: finderReducer,
    header: headerReducer
})

let store = createStore(reducers)

window.store = store;

export default store;