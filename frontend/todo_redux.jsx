import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {allTodos} from './reducers/selectors';
import Root from './components/index';

document.addEventListener('DOMContentLoaded', () => {
    const preloadedState = {};
    const store = configureStore(preloadedState);
    window.store = store;
    window.allTodos = allTodos;

    const root = document.getElementById('content');
    ReactDOM.render(<Root store={store} />, root);
});
