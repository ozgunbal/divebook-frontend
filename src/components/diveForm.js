import React, { Component } from 'react';
import { connect } from 'react-redux';

import Input from 'react-toolbox/lib/input/Input';
import DatePicker from 'react-toolbox/lib/date_picker/DatePicker';
import Button from 'react-toolbox/lib/button/Button';
import EditIcon from './editIcon';

import { getDiveToEdit } from '../reducers';
import { addDive, editDive, toggleDialog } from '../actions';
import { sendDive, updateDive } from '../api';

class DiveForm extends Component {
    constructor(props) {
        super(props);
        this.formType = props.formType;

        if (this.formType === "add") {
            this.formHandler = (dive) => {
                sendDive(dive).then(props.addDive);
            }
            this.state = {
                id: props.addId,
                site: '',
                meter: '',
                minute: '',
                date: '',
                note: ''
            };
        } else if (this.formType === "edit") {
            this.formHandler = (dive) => {
                updateDive(dive).then(props.editDive);
            }
            this.state = props.diveToEdit;
        }

        this.sendDiveData = this.sendDiveData.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDatePick = this.handleDatePick.bind(this);
    }

    sendDiveData() {
        this.formHandler(this.state);
        this.props.toggleDialog();
    }

    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value });
    }
    handleDatePick = (value) => {
        this.setState({ date: value });
    }

    render() {
        const { site, meter, minute, date, note } = this.state;
        return (
            <div className="DiveForm" style={{ textAlign: 'center', justifyContent: 'center' }} onChange={this.handleChange.bind(this)}>
                <Input type='text' label='Site' name='site' value={site} />
                <Input type='number' label='Meters' name='meter' value={meter} />
                <Input type='number' label='Minutes' name='minute' value={minute} />
                <DatePicker
                    label='Date'
                    name='date'
                    value={date ? new Date(date) : ''}
                    onChange={this.handleDatePick}
                    sundayFirstDayOfWeek
                />
                <Input type='text' multiline label='Notes' name="note" value={note} />
                {
                    this.formType === 'add' ? <Button onClick={this.sendDiveData} icon="add" label="add" primary /> : ''
                }
                {
                    this.formType === 'edit' ? <Button onClick={this.sendDiveData} icon={<EditIcon />} label="edit" primary /> : ''
                }

            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    formType: state.dialog.formType,
    diveToEdit: getDiveToEdit(state),
    addId: state.divelist.length
});

export default connect(
    mapStateToProps,
    {
        addDive,
        editDive,
        toggleDialog,
    }
)(DiveForm);