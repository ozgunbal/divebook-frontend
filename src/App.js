import React, { Component } from 'react';
import './App.css';

import DiveList from './components/diveList';
import CustomDialog from './components/customDialog';
import Button from 'react-toolbox/lib/button/Button';

import { toggleDialog } from './actions';

class App extends Component {
  constructor(props) {
    super(props)
    this.store = props.store;
  }

  render() {
    return (
      <div className="App">
        <h1>Divebook Application</h1>
        <Button icon="add" label="New Dive" raised primary onClick={toggleDialog} />
        <CustomDialog/>
        <DiveList divelist = {this.store.getState().divelist}/>
      </div>
    );
  }
}

export default App;
