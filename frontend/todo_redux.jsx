
import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', () =>{

    const preloadedState = localStorage.state ?
        JSON.parse(localStorage.state) : {};
    const store = configureStore(preloadedState);

    const root = document.getElementById('content');

    ReactDOM.render(<Root store={store} />, root);
})