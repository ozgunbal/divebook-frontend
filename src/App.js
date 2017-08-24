import React, { Component } from 'react';
import './App.css';

import DiveList from './components/diveList';
import CustomDialog from './components/customDialog';
import Button from 'react-toolbox/lib/button/Button';

// temporary diveService
import fakeDiveService from './fakeDiveService/fakeDiveService'

class App extends Component {
  constructor(props) {
    super(props)
    const divelist = fakeDiveService.getDiveList();
    const dialogProps = {
      active: false,
      placeholder: {}
    }
    this.state = { dialog: dialogProps, divelist: divelist};
    this.handleToggle = this.handleToggle.bind(this);
    this.addDive = this.addDive.bind(this);
    this.editDive = this.editDive.bind(this);
    this.changeDiveInfo = this.changeDiveInfo.bind(this);
  }

  handleToggle(event) {
    let dialogProps = this.state.dialog;
    dialogProps.placeholder = {};
    dialogProps.active = !dialogProps.active;
    this.setState({ dialog: dialogProps });
  }

  addDive(data) {
    // TODO: send data to diveService
    let dive = data;
    dive.id = this.state.divelist.length;
    fakeDiveService.addNewDive(dive);
  }
  editDive(diveId){
    const dive = fakeDiveService.getDiveById(diveId);
    let dialogProps = this.state.dialog;
    dialogProps.active = !dialogProps.active;
    dialogProps.placeholder = dive;
    this.setState({ dialog: dialogProps });
  }
  changeDiveInfo(diveData){
    fakeDiveService.changeDiveInfo(diveData);

    const divelist = fakeDiveService.getDiveList();
    let dialogProps = this.state.dialog;
    dialogProps.placeholder = {};
    this.setState({ dialog: dialogProps, divelist: divelist });
  }

  render() {
    return (
      <div className="App">
        <h1>Divebook Application</h1>
        <Button icon="add" label="New Dive" raised primary onClick={this.handleToggle} />
        <CustomDialog
          active = {this.state.dialog.active}
          addDive = {this.addDive}
          changeDive = {this.changeDiveInfo}
          handleToggle = {this.handleToggle}
          placeholder = {this.state.dialog.placeholder}
        />
        <DiveList divelist = {this.state.divelist} editDive ={this.editDive}/>
      </div>
    );
  }
}

export default App;
