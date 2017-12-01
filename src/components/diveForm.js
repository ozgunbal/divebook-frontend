import React, { Component } from 'react';
import { connect } from 'react-redux';

import Input from 'react-toolbox/lib/input/Input';
import DatePicker from 'react-toolbox/lib/date_picker/DatePicker';
import Button from 'react-toolbox/lib/button/Button';
import EditIcon from './editIcon';

import { getDiveToEdit } from '../reducers';
import { addDive, editDive, toggleDialog } from '../actions';

class DiveForm extends Component {
    constructor(props) {
        super(props);
        this.formType = props.formType;

        if (this.formType === "add") {
            this.formHandler = props.addDive;
            this.state = {
                id: props.addId,
                site: '',
                meter: '',
                minute: '',
                date: '',
                notes: ''
            };
        } else if (this.formType === "edit") {
            this.formHandler = props.editDive;
            this.state = props.diveToEdit;
        }

        this.sendDiveData = this.sendDiveData.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDatePick = this.handleDatePick.bind(this);
    }

    sendDiveData() {
        this.formHandler(this.state);
        this.props.toggle();
    }

    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value });
    }
    handleDatePick = (value) => {
        this.setState({ date: value });
    }

    render() {
        return (
            <div className="DiveForm" style={{ textAlign: 'center', justifyContent: 'center' }} onChange={this.handleChange.bind(this)}>
                <Input type='text' label='Site' name='site' value={this.state.site} />
                <Input type='number' label='Meters' name='meter' value={this.state.meter} />
                <Input type='number' label='Minutes' name='minute' value={this.state.minute} />
                <DatePicker
                    label='Date'
                    name='date'
                    value={this.state.date}
                    onChange={this.handleDatePick}
                    sundayFirstDayOfWeek
                />
                <Input type='text' multiline label='Notes' name="notes" value={this.state.notes} />
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

const mapDispatchToProps = (dispatch) => ({
    addDive: dive => dispatch(addDive(dive)),
    editDive: dive => dispatch(editDive(dive)),
    toggle: () => dispatch(toggleDialog()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DiveForm);