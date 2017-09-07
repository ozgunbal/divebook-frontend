import React from 'react';

import { Card, CardTitle, CardActions, CardText } from 'react-toolbox/lib/card';
import Button from 'react-toolbox/lib/button/Button';
import './diveDisplay.css'

import { openEditDialog } from '../actions';

const DiveDisplay = ({
    index,
    active,
    diveInfo,
    toggleDiveDetail
}) => {
    const diveDetailStyle = {
        width: '70%',
        margin: '0 auto'
    }

    return (
        <div>
            <div className="DiveDisplay" onClick={ () => {toggleDiveDetail(index)}}>
                <span className="diveName" >{diveInfo.site}</span>
                <span className="meterAndMinute">{diveInfo.meter}m {diveInfo.minute}"</span>
                <span className="diveDate">{diveInfo.date.toDateString()}</span>
            </div>
            {
                active ?
                    <Card style={diveDetailStyle} onClick={ () => {toggleDiveDetail(index)}}>
                        <CardTitle title={diveInfo.site} subtitle={diveInfo.date.toDateString()} />
                        <CardText>Maximum Depth: {diveInfo.meter} m Minutes: {diveInfo.minute}" </CardText>
                        <CardText>{diveInfo.notes}</CardText>
                        <CardActions>
                            <Button label='Edit Dive' onClick = {() => 
                                {
                                    toggleDiveDetail(index);
                                    openEditDialog(diveInfo);
                                }} />
                        </CardActions>
                    </Card>
                    : null
            }
        </div>
    );
}

export default DiveDisplay;