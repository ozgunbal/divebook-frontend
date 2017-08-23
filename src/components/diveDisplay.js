import React from 'react';

import { Card, CardTitle, CardActions, CardText } from 'react-toolbox/lib/card';
import Button from 'react-toolbox/lib/button/Button';
import './diveDisplay.css'

function DiveDisplay(props) {
    const diveDetailStyle = {
        width: '70%',
        margin: '0 auto'
    }

    return (
        <div>
            <div className="DiveDisplay" onClick={ () => {props.toggleDiveDetail(props.index)}}>
                <span className="diveName" >{props.diveInfo.site}</span>
                <span className="meterAndMinute">{props.diveInfo.meter}m {props.diveInfo.minute}"</span>
                <span className="diveDate">{props.diveInfo.date.toDateString()}</span>
            </div>
            {
                props.active ?
                    <Card style={diveDetailStyle} onClick={ () => {props.toggleDiveDetail(props.index)}}>
                        <CardTitle title={props.diveInfo.site} subtitle={props.diveInfo.date.toDateString()} />
                        <CardText>Maximum Depth: {props.diveInfo.meter} m Minutes: {props.diveInfo.minute}" </CardText>
                        <CardText>{props.diveInfo.notes}</CardText>
                        <CardActions>
                            <Button label='Edit Dive' />
                        </CardActions>
                    </Card>
                    : null
            }
        </div>
    );
}

export default DiveDisplay;