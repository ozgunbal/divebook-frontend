import React, { Component } from 'react';
import './diveList.css'

import DiveDisplay from './diveDisplay';

class DiveList extends Component {
    constructor(props) {
        super(props);
        this.state = {activeDetailIndex : ''}
        this.toggleDiveDetail = this.toggleDiveDetail.bind(this);
    }

    toggleDiveDetail(index) {
        console.log('toggle Event');
        console.log(this.state.active);
        this.setState((prevState) => ({ active: !prevState.active }));
    }

    render() {
        return (
            <div className="DiveList">
                {Array(10).fill(2).map((_, idx) => {
                    const isActive = this.state.activeDetailIndex == idx ? 
                    return (
                        <DiveDisplay key={idx} active = {} />
                    );
                }) /* for testing*/}
            </div>
        );
    }
}

export default DiveList;