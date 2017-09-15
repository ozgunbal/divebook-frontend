import React from 'react';
import './diveList.css'

import DiveDisplay from './diveDisplay';
import store from '../configureStore';

const DiveList = () => {
    const divelist = store.getState().divelist;
    return (
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
}

export default DiveList;