import { combineReducers } from 'redux';
import divelist from './divelist';
import dialog from './dialog';

const dives = combineReducers({
    divelist,
    dialog
});

export default dives;