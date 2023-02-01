import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reducer from './redux/reducer';
import {Provider} from 'react-redux'
import { createStore } from 'redux';
import { rootReducer } from './redux/store';


const store = createStore(rootReducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


