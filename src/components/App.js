import React from 'react';
import './App.css';
import { connect } from 'react-redux';

import DiveList from './diveList';
import CustomDialog from './customDialog';
import Button from 'react-toolbox/lib/button/Button';

import { openAddForm, toggleDialog } from '../actions';

let App = ({ onAddClick }) =>
  (
    <div className="App">
      <h1>Divebook Application</h1>
      <Button icon="add" label="New Dive" raised primary onClick={onAddClick} />
      <CustomDialog />
      <DiveList />
    </div>
  );

const mapDispatchToProps = (dispatch) => ({
  onAddClick() {
    dispatch(openAddForm())
    dispatch(toggleDialog())
  }
})
App = connect(null,mapDispatchToProps)(App);

export default App;
