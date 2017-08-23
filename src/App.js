import React, { Component } from 'react';
import './App.css';

import DiveList from './components/diveList';
//import AddButton from './components/addButton';
import Button from 'react-toolbox/lib/button/Button';
import Dialog from 'react-toolbox/lib/dialog/Dialog';
import DiveForm from './components/diveForm';

// temporary diveService
import fakeDiveService from './fakeDiveService/fakeDiveService'

class App extends Component {
  constructor(props) {
    super(props)
    const divelist = fakeDiveService.getDiveList()
    this.state = { active: false, divelist: divelist};
    this.handleToggle = this.handleToggle.bind(this);
    this.addDive = this.addDive.bind(this);
  }

  handleToggle() {
    this.setState({ active: !this.state.active });
  }

  addDive(data) {
    // TODO: send data to diveService
    fakeDiveService.addNewDive(data);
  }

  render() {
    return (
      <div className="App">
        <h1>Divebook Application</h1>
        <Button icon="add" label="New Dive" raised primary onClick={this.handleToggle} />
        <Dialog
          active={this.state.active}
          onEscKeyDown={this.handleToggle}
          onOverlayClick={this.handleToggle}
          type="normal"
          title='Enter details of your dive!'
        >
          <DiveForm formHandler={this.addDive} toggle={this.handleToggle} />
        </Dialog>
        <DiveList divelist = {this.state.divelist}/>
      </div>
    );
  }
}

export default App;
