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
                <span className="diveDate">{formatDate(new Date(dive.date))}</span>
            </div>
            {
                isCardDisplayed ? <DiveCard dive={dive} index={index} /> : null
            }
        </div>
    );
}

const formatDate = (date) => (
    `${date.getDate() < 10 ? '0' : ''}${date.getDate()}/${date.getMonth() + 1 < 10 ? '0' : ''}${date.getMonth() + 1}/${date.getFullYear()}`
);

const mapStateToProps = (state, ownProps) => ({
    isCardDisplayed: state.diveDisplay === ownProps.index
});

export default connect(
    mapStateToProps,
    { toggleDiveDetail },
)(DiveDisplay);