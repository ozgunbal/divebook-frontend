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
                <span className="diveName" >Test Dive Name</span>
                <span className="meterAndMinute">Test X m Y"</span>
                <span className="diveDate">Test {new Date().toDateString()}</span>
            </div>
            {
                props.active ?
                    <Card style={diveDetailStyle} onClick={ () => {props.toggleDiveDetail(props.index)}}>
                        <CardTitle title='Test Dive Name' subtitle={`Test ${new Date().toDateString()}`} />
                        <CardText>Maximum Depth: X m Minutes: Y" </CardText>
                        <CardText>Test Notes</CardText>
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