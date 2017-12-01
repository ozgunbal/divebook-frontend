import React from 'react';
import { connect } from 'react-redux';
import DiveCard from './diveCard';

import './diveDisplay.css'

import { toggleDiveDetail } from '../actions';

let DiveDisplay = ({
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
                <span className="diveDate">{dive.date.toDateString()}</span>
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

const mapDispatchToProps = (dispatch) => ({
    toggleDiveDetail: (index) => dispatch(toggleDiveDetail(index))
})

DiveDisplay = connect(
    mapStateToProps,
    mapDispatchToProps,
)(DiveDisplay);

export default DiveDisplay;