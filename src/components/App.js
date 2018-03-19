import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import DiveList from './diveList';
import CustomDialog from './customDialog';
import Button from 'react-toolbox/lib/button/Button';

import { openAddForm, toggleDialog, setLogout } from '../actions';
import { logout } from './../api';

const App = ({ onAddClick, isLoggedIn, logOut }) =>
  (
    isLoggedIn ?
      <div className="App">
        <Button style={{position:"absolute", right: "2%"}}label="Log Out" raised primary onClick={() => logOut()} />
        <h1>Divebook Application</h1>
        <Button icon="add" label="New Dive" raised primary onClick={onAddClick} />
        <CustomDialog />
        <DiveList />
      </div> :
      <Redirect to='/login' />
  );

const mapsStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn
});

const mapDispatchToProps = (dispatch) => ({
  onAddClick: () => {
    dispatch(openAddForm())
    dispatch(toggleDialog())
  },
  logOut: () => {
    logout().then(dispatch(setLogout()))
  },
})

export default connect(
  mapsStateToProps,
  mapDispatchToProps
)(App);
