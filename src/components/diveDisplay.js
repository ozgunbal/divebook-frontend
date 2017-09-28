import React from 'react';

import { Card, CardTitle, CardActions, CardText } from 'react-toolbox/lib/card';
import Button from 'react-toolbox/lib/button/Button';
import './diveDisplay.css'

import { openEditForm, toggleDiveDetail } from '../actions';
import store from '../configureStore';

const DiveDisplay = ({
    id,
    index,
    site,
    meter,
    minute,
    date,
    notes
}) => {
    const diveDetailStyle = {
        width: '70%',
        margin: '0 auto'
    }
    const isCardDisplayed = store.getState().diveDisplay === index;

    return (
        <div>
            <div className="DiveDisplay" onClick={() => { toggleDiveDetail(index) }}>
                <span className="diveName" >{site}</span>
                <span className="meterAndMinute">{meter}m {minute}"</span>
                <span className="diveDate">{date.toDateString()}</span>
            </div>
            {
                isCardDisplayed ?
                    <Card style={diveDetailStyle} onClick={() => { toggleDiveDetail(index) }}>
                        <CardTitle title={site} subtitle={date.toDateString()} />
                        <CardText>Maximum Depth: {meter} m Minutes: {minute}" </CardText>
                        <CardText>{notes}</CardText>
                        <CardActions>
                            <Button label='Edit Dive' onClick={() => {
                                toggleDiveDetail(index);
                                openEditForm({
                                    id,
                                    site,
                                    meter,
                                    minute,
                                    date,
                                    notes
                                });
                            }} />
                        </CardActions>
                    </Card>
                    : null
            }
        </div>
    );
}

export default DiveDisplay;