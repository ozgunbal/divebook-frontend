import { combineReducers } from 'redux';
import divelist from './divelist';
import dialog from './dialog';
import diveDisplay from './dive';

const dives = combineReducers({
    divelist,
    diveDisplay,
    dialog
});

export default dives;