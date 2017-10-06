import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import App from './App';

import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import theme from '../toolbox/theme.js';
import '../toolbox/theme.css';

const Root = ({ store }) => (
    <Provider store = {store}>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired,
};

export default Root;
