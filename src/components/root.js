import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Login from './login';

import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import theme from '../toolbox/theme.js';
import '../toolbox/theme.css';

const Root = ({ store }) => (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={App}/>
                    <Route path='/login' component={Login}/>
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired,
};

export default Root;
