import React from 'react';
import './diveList.css'

import DiveDisplay from './diveDisplay';

function DiveList(props) {
    return (
        <div className = "DiveList">
            {Array(10).fill(2).map((_, idx) => <DiveDisplay key={idx}/>) /* for testing*/}
        </div>
    );
}

export default DiveList;