import React, { Component } from 'react';
import './diveDetail.css'

import Button from 'react-toolbox/lib/button/Button';
import Input from 'react-toolbox/lib/input/Input';
import DatePicker from 'react-toolbox/lib/date_picker/DatePicker';

class DiveDetail extends Component {
    state = {
        site: '',
        minute: '',
        depth: '',
        date: '',
        notes: ''
    }

    handleChange = (name, value) => {
        this.setState({ ...this.state, [name]: value });
    }

    render() {
        return (
            <div className="DiveDetail">
                <p>Enter details of your dive!</p>
                <Input type='text' label='Name' name='name' value={this.state.site} onChange={this.handleChange.bind(this, 'site')} />
                <Input type='number' label='Minute' value={this.state.minute} onChange={this.handleChange.bind(this, 'minute')} />
                <Input type='number' label='Depth' value={this.state.depth} onChange={this.handleChange.bind(this, 'depth')} />
                <DatePicker
                    label='Date'
                    onChange={this.handleChange.bind(this, 'date')}
                    value={this.state.date}
                    sundayFirstDayOfWeek
                />
                <Input type='text' multiline label='Notes' value={this.state.notes} onChange={this.handleChange.bind(this, 'notes')} />
                <Button icon='add' label='Add Dive' flat primary />
            </div>
        );
    }
}

export default DiveDetail;