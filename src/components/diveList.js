import React, { Component } from 'react';
import { connect } from 'react-redux';
import './diveList.css'

import DiveDisplay from './diveDisplay';
import { fetchDives } from './../api';
import { receiveDives } from './../actions'

class DiveList extends Component {
    componentDidMount () {
        fetchDives().then(this.props.receiveDives);
    }
    render() {
        const { divelist } = this.props;
        return (
            <div className="DiveList">
                {divelist.map((dive, idx) =>
                    <DiveDisplay
                        key={idx}
                        dive={dive}
                        index={idx}
                    />
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    divelist: state.divelist
})

DiveList = connect(
    mapStateToProps,
    { receiveDives },
)(DiveList);

export default DiveList;