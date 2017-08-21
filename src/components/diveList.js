import React, { Component } from 'react';
import './diveList.css'

import DiveDisplay from './diveDisplay';

class DiveList extends Component {
    constructor(props) {
        super(props);
        this.state = { activeDetailIndex: '' }
        this.toggleDiveDetail = this.toggleDiveDetail.bind(this);
    }

    toggleDiveDetail(index) {
        this.setState((prevState) => {
            let newIndex = index
            if (prevState.activeDetailIndex === index) {
                newIndex = '';
            }
            return { activeDetailIndex: newIndex }
        });
    }

    render() {
        return (
            <div className="DiveList">
                {Array(10).fill(2).map((_, idx) => {
                    const isActive = this.state.activeDetailIndex === idx;
                    return (
                        <DiveDisplay key={idx} index={idx} active={isActive} toggleDiveDetail={this.toggleDiveDetail} />
                    );
                }) /* for testing*/}
            </div>
        );
    }
}

export default DiveList;