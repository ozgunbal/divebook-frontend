import React from 'react';
import './diveDisplay.css'

function DiveDisplay(props) {
    return (
        <div className = "DiveDisplay">
            <span className = "diveName" >Test Dive Name</span>
            <span className = "meterAndMinute">Test X m Y"</span>
            <span className = "diveDate">Test {new Date().toDateString()}</span>
        </div>
    );
}

export default DiveDisplay;