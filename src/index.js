import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import theme from './toolbox/theme.js';
import './toolbox/theme.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './configureStore';

const render = () => {
    ReactDOM.render(
        <ThemeProvider theme={theme}>
            <App store={store} />
        </ThemeProvider>,
        document.getElementById('root'));
}

store.subscribe(render);
render();

registerServiceWorker();
