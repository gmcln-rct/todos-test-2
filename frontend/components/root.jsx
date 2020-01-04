
import React from 'react';
import {Provider} from 'react-redux';
import App from './app';

export default Root = ({store}) => (
    <Provider store={store}>
        <App />
    </Provider>
);