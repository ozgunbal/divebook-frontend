import React, { Component } from 'react';
import './diveForm.css'

import Input from 'react-toolbox/lib/input/Input';
import DatePicker from 'react-toolbox/lib/date_picker/DatePicker';
import Button from 'react-toolbox/lib/button/Button';

class DiveForm extends Component {
    constructor(props) {
        super(props);

        if (props.placeholder.site) {
            this.icon = <EditIcon />;
            this.label = "edit";
        } else {
            this.icon = "add";
            this.label = "add";
        }
    }
    state = {
        id: this.props.placeholder.id === 0 ? 0 : (this.props.placeholder.id || '') ,
        site: this.props.placeholder.site || '',
        minute: this.props.placeholder.minute || '',
        meter: this.props.placeholder.meter || '',
        date: this.props.placeholder.date || '',
        notes: this.props.placeholder.notes || ''
    }
    sendDiveData() {
        this.props.formHandler(this.state);
        this.props.toggle();
    }

    handleChange = (name, value) => {
        this.setState({ ...this.state, [name]: value });
    }

    render() {
        return (
            <div className="DiveForm">
                <Input type='text' label='Name' name='name' value={this.state.site} onChange={this.handleChange.bind(this, 'site')} />
                <Input type='number' label='Meters' value={this.state.meter} onChange={this.handleChange.bind(this, 'meter')} />
                <Input type='number' label='Minutes' value={this.state.minute} onChange={this.handleChange.bind(this, 'minute')} />
                <DatePicker
                    label='Date'
                    onChange={this.handleChange.bind(this, 'date')}
                    value={this.state.date}
                    sundayFirstDayOfWeek
                />
                <Input type='text' multiline label='Notes' value={this.state.notes} onChange={this.handleChange.bind(this, 'notes')} />
                <Button onClick={this.sendDiveData.bind(this)} icon={this.icon} label={this.label} primary />
            </div>
        );
    }
}

//TODO: svg pixel issues!!
const EditIcon = () => (
    <svg viewBox="0 0 129 129" enableBackground="new 0 0 129 129" width="20px" height="20px">
        <g>
            <g>
                <path d="m119.2,114.3h-109.4c-2.3,0-4.1,1.9-4.1,4.1s1.9,4.1 4.1,4.1h109.5c2.3,0 4.1-1.9 4.1-4.1s-1.9-4.1-4.2-4.1z" fill="#006DF0" />
                <path d="m5.7,78l-.1,19.5c0,1.1 0.4,2.2 1.2,3 0.8,0.8 1.8,1.2 2.9,1.2l19.4-.1c1.1,0 2.1-0.4 2.9-1.2l67-67c1.6-1.6 1.6-4.2 0-5.9l-19.2-19.4c-1.6-1.6-4.2-1.6-5.9-1.77636e-15l-13.4,13.5-53.6,53.5c-0.7,0.8-1.2,1.8-1.2,2.9zm71.2-61.1l13.5,13.5-7.6,7.6-13.5-13.5 7.6-7.6zm-62.9,62.9l49.4-49.4 13.5,13.5-49.4,49.3-13.6,.1 .1-13.5z" fill="#006DF0" />
            </g>
        </g>
    </svg>
);

export default DiveForm;