import React, { Component } from 'react';
import './App.css';

import DiveList from './components/diveList';
import AddButton from './components/addButton';

class App extends Component {
  render() {
    return (
      <div className = "App">
        <h1>Divebook Application</h1>
        <AddButton/>
        <DiveList/>
      </div>
    );
  }
}

export default App;
