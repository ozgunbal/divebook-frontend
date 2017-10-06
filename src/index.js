import React from 'react';
import { render } from 'react-dom';

import './index.css';

import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore';

import Root from './components/root';

const store = configureStore();
render (
    <Root store = {store}/>,
    document.getElementById('root')
)

registerServiceWorker();
