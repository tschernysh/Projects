import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './state/redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux'


let rerenderEntireTree = () => {
  ReactDOM.render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>,
    document.getElementById('root') 
  );
};

rerenderEntireTree()

store.subscribe(() => rerenderEntireTree());


reportWebVitals();
