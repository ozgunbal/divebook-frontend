import React from 'react';
import { connect } from 'react-redux';
import DiveCard from './diveCard';

import './diveDisplay.css'

import { toggleDiveDetail } from '../actions';

const DiveDisplay = ({
    index,
    dive,
    isCardDisplayed,
    toggleDiveDetail
}) => {
    return (
        <div>
            <div className="DiveDisplay" onClick={() => { toggleDiveDetail(index) }}>
                <span className="diveName" >{dive.site}</span>
                <span className="meterAndMinute">{dive.meter}m {dive.minute}"</span>
                <span className="diveDate">{new Date(dive.date).toLocaleDateString()}</span>
            </div>
            {
                isCardDisplayed ? <DiveCard dive={dive} index={index} /> : null
            }
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
    isCardDisplayed: state.diveDisplay === ownProps.index
});

export default connect(
    mapStateToProps,
    { toggleDiveDetail },
)(DiveDisplay);