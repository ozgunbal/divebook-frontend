import React from 'react';
import './App.css';

import DiveList from './components/diveList';
import CustomDialog from './components/customDialog';
import Button from 'react-toolbox/lib/button/Button';

import { toggleDialog } from './actions';

const App = () =>
  (
    <div className="App">
      <h1>Divebook Application</h1>
      <Button icon="add" label="New Dive" raised primary onClick={toggleDialog} />
      <CustomDialog />
      <DiveList />
    </div>
  );


export default App;
