import React from 'react';
import { connect } from 'react-redux';

import { Card, CardTitle, CardActions, CardText } from 'react-toolbox/lib/card';
import Button from 'react-toolbox/lib/button/Button';
import './diveDisplay.css'

import { toggleDialog, openEditForm, toggleDiveDetail } from '../actions';

let DiveDisplay = ({
    id,
    index,
    site,
    meter,
    minute,
    date,
    notes,
    isCardDisplayed,
    dispatch
}) => {
    const diveDetailStyle = {
        width: '70%',
        margin: '0 auto'
    }

    return (
        <div>
            <div className="DiveDisplay" onClick={() => { dispatch(toggleDiveDetail(index)) }}>
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
                                //dispatch(toggleDiveDetail(index));
                                dispatch(openEditForm({
                                    id,
                                    site,
                                    meter,
                                    minute,
                                    date,
                                    notes
                                }));
                                dispatch(toggleDialog())
                            }} />
                        </CardActions>
                    </Card>
                    : null
            }
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
    isCardDisplayed: state.diveDisplay === ownProps.index
})

DiveDisplay = connect(
    mapStateToProps
)(DiveDisplay);

export default DiveDisplay;