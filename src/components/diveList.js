import React from 'react';
import { connect } from 'react-redux';
import './diveList.css'

import DiveDisplay from './diveDisplay';

let DiveList = ({ divelist }) => (
    <div className="DiveList">
        {divelist.map((dive, idx) => (
            <DiveDisplay
                key={idx}
                {...dive}
                index={idx}
            />
        )
        )}
    </div>
);

const mapStateToProps = (state) => ({
    divelist: state.divelist
})

DiveList = connect(
    mapStateToProps
)(DiveList);

export default DiveList;